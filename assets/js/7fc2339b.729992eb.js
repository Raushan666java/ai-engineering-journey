"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2496],{

/***/ 69415
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_05_secret_and_key_management_md_7fc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-17-ai-security-guardrails-05-secret-and-key-management-md-7fc.json
const site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_05_secret_and_key_management_md_7fc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-security-guardrails/05-secret-and-key-management","title":"Secret and Key Management","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/17-ai-security-guardrails/05-secret-and-key-management.md","sourceDirName":"courses/ai-engineering-placement/17-ai-security-guardrails","slug":"/ai-engineering-placement/17-ai-security-guardrails/05-secret-and-key-management","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/05-secret-and-key-management","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":220,"frontMatter":{"id":"05-secret-and-key-management","slug":"/ai-engineering-placement/17-ai-security-guardrails/05-secret-and-key-management","title":"Secret and Key Management","sidebar_label":"Secret and Key Management","sidebar_position":220},"sidebar":"placementSidebar","previous":{"title":"Guardrails Frameworks","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/04-guardrails-frameworks"},"next":{"title":"Compliance and Ethics","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/06-compliance-and-ethics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/17-ai-security-guardrails/05-secret-and-key-management.md


const frontMatter = {
	id: '05-secret-and-key-management',
	slug: '/ai-engineering-placement/17-ai-security-guardrails/05-secret-and-key-management',
	title: 'Secret and Key Management',
	sidebar_label: 'Secret and Key Management',
	sidebar_position: 220
};
const contentTitle = 'Secret and Key Management';

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
  "value": "5.1 Secret Management Overview",
  "id": "51-secret-management-overview",
  "level": 2
}, {
  "value": "5.2 API Key Lifecycle",
  "id": "52-api-key-lifecycle",
  "level": 2
}, {
  "value": "5.3 Vault Integration",
  "id": "53-vault-integration",
  "level": 2
}, {
  "value": "5.4 Environment Configuration",
  "id": "54-environment-configuration",
  "level": 2
}, {
  "value": "5.5 Audit &amp; Monitoring",
  "id": "55-audit--monitoring",
  "level": 2
}, {
  "value": "5.6 Zero-Trust Architecture",
  "id": "56-zero-trust-architecture",
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
        id: "secret-and-key-management",
        children: "Secret and Key Management"
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
            children: "Understand secret management requirements for AI/LLM applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement API key rotation and lifecycle management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build vault integrations for secure credential storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy environment-specific secret configurations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up audit logging for secret access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design zero-trust architecture for model access control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI systems face unique security threats. Prompt injection, data leakage, and content abuse require specialized defenses. This module covers threat modeling, guardrails, and compliance for production AI."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding secret and key management is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how secret and key management works in practice."
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
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secret Management Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Types of secrets in AI systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API Key Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creation, rotation, revocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vault Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HashiCorp Vault for secure storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dev/staging/prod secret separation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit & Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secret access tracking and alerting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-Trust Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model API access without hardcoded keys"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\r\n    subgraph Secrets[Secret Sources]\r\n        S1[API Keys]\r\n        S2[Database Creds]\r\n        S3[Model Tokens]\r\n        S4[Encryption Keys]\r\n    end\r\n    subgraph Vault[Vault Server]\r\n        V1[Encrypted Storage]\r\n        V2[Access Policies]\r\n        V3[Audit Log]\r\n        V4[Rotation Engine]\r\n    end\r\n    subgraph Apps[Applications]\r\n        A1[Model Serving]\r\n        A2[Pipeline]\r\n        A3[CI/CD]\r\n    end\r\n    Secrets --> V1\r\n    A1 --> V1\r\n    A2 --> V1\r\n    A3 --> V1\r\n    V1 --> V2 --> V3"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-secret-management-overview",
      children: "5.1 Secret Management Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI/LLM applications have more secrets than traditional applications: LLM API keys, model registry tokens, vector database credentials, embedding API keys, and fine-tuning data access tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\r\nimport json\r\nimport base64\r\nfrom typing import Dict, Optional, List\r\nfrom datetime import datetime, timedelta\r\nimport hashlib\r\n\r\nclass SecretType:\r\n    LLM_API_KEY = \"llm_api_key\"\r\n    DATABASE_URL = \"database_url\"\r\n    MODEL_REGISTRY_TOKEN = \"model_registry_token\"\r\n    VECTOR_DB_CREDENTIALS = \"vector_db_credentials\"\r\n    ENCRYPTION_KEY = \"encryption_key\"\r\n    CI_CD_TOKEN = \"ci_cd_token\"\r\n    SERVICE_ACCOUNT = \"service_account\"\r\n    WEBHOOK_SECRET = \"webhook_secret\"\r\n\r\nclass SecretManager:\r\n    \"\"\"Centralized secret management for AI applications.\"\"\"\r\n\r\n    def __init__(self, vault_addr: str = None):\r\n        self.vault_addr = vault_addr\r\n        self.cache = {}\r\n        self.access_log = []\r\n\r\n    def get_secret(self, secret_name: str, environment: str = \"production\") -> Optional[str]:\r\n        \"\"\"Retrieve a secret with access logging.\"\"\"\r\n        cache_key = f\"{environment}:{secret_name}\"\r\n\r\n        # Check cache first\r\n        if cache_key in self.cache:\r\n            cached = self.cache[cache_key]\r\n            if cached[\"expires_at\"] > datetime.utcnow():\r\n                self._log_access(secret_name, \"cache_hit\")\r\n                return cached[\"value\"]\r\n\r\n        # Fetch from vault (simulated)\r\n        secret = self._fetch_from_vault(secret_name, environment)\r\n        if secret:\r\n            self.cache[cache_key] = {\r\n                \"value\": secret,\r\n                \"expires_at\": datetime.utcnow() + timedelta(hours=1)\r\n            }\r\n            self._log_access(secret_name, \"vault_fetch\")\r\n            return secret\r\n\r\n        # Fallback to environment variable\r\n        env_var = secret_name.upper()\r\n        secret = os.environ.get(env_var)\r\n        if secret:\r\n            self._log_access(secret_name, \"env_var\")\r\n            return secret\r\n\r\n        return None\r\n\r\n    def set_secret(self, secret_name: str, secret_value: str, environment: str = \"production\"):\r\n        \"\"\"Store a secret in vault (simulated).\"\"\"\r\n        self._log_access(secret_name, \"set\")\r\n        print(f\"🔐 Stored secret '{secret_name}' for {environment}\")\r\n\r\n    def rotate_secret(self, secret_name: str, environment: str = \"production\") -> str:\r\n        \"\"\"Generate and store a new secret value.\"\"\"\r\n        import secrets\r\n        new_secret = secrets.token_urlsafe(32)\r\n        self.set_secret(secret_name, new_secret, environment)\r\n        self._log_access(secret_name, \"rotate\")\r\n        return new_secret\r\n\r\n    def _fetch_from_vault(self, secret_name: str, environment: str) -> Optional[str]:\r\n        \"\"\"Simulated vault fetch.\"\"\"\r\n        return None\r\n\r\n    def _log_access(self, secret_name: str, method: str):\r\n        self.access_log.append({\r\n            \"secret\": secret_name,\r\n            \"method\": method,\r\n            \"timestamp\": datetime.utcnow().isoformat()\r\n        })\r\n\r\n    def get_access_report(self) -> Dict:\r\n        \"\"\"Generate access report for audit.\"\"\"\r\n        from collections import Counter\r\n        access_counts = Counter(entry[\"secret\"] for entry in self.access_log)\r\n        return {\r\n            \"total_accesses\": len(self.access_log),\r\n            \"secrets_accessed\": len(set(entry[\"secret\"] for entry in self.access_log)),\r\n            \"most_accessed\": access_counts.most_common(5),\r\n            \"recent_accesses\": self.access_log[-10:]\r\n        }\r\n\r\nsm = SecretManager()\r\nsm.get_secret(\"openai_api_key\")\r\nsm.get_secret(\"database_url\")\r\nprint(json.dumps(sm.get_access_report(), indent=2, default=str))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common AI secrets and their risks"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Secret Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk if Leaked"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLM API key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sk-..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized usage, $10K+/day bills"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model registry token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mlflow_..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model theft, unauthorized deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vector DB credential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "qdrant_..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data exfiltration of knowledge base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tuning data token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hf_..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data theft"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256 key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All stored secrets compromised"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-api-key-lifecycle",
      children: "5.2 API Key Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API keys need a complete lifecycle: creation, distribution, usage tracking, rotation, and revocation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import secrets\r\nimport hashlib\r\nfrom datetime import datetime, timedelta\r\nfrom typing import Optional, Dict, List\r\nimport uuid\r\n\r\nclass APIKeyManager:\r\n    \"\"\"Complete API key lifecycle management.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.keys = {}  # key_hash -> metadata\r\n        self.revoked_keys = set()\r\n\r\n    def create_key(self, name: str, permissions: List[str], expires_in_days: int = 90, rate_limit: int = 1000) -> Dict:\r\n        \"\"\"Create a new API key.\"\"\"\r\n        # Generate key\r\n        key_id = str(uuid.uuid4())[:8]\r\n        raw_key = f\"sk-{key_id}-{secrets.token_urlsafe(24)}\"\r\n        key_hash = self._hash_key(raw_key)\r\n\r\n        metadata = {\r\n            \"key_id\": key_id,\r\n            \"name\": name,\r\n            \"permissions\": permissions,\r\n            \"created_at\": datetime.utcnow(),\r\n            \"expires_at\": datetime.utcnow() + timedelta(days=expires_in_days),\r\n            \"rate_limit\": rate_limit,\r\n            \"usage_count\": 0,\r\n            \"last_used\": None,\r\n            \"status\": \"active\"\r\n        }\r\n\r\n        self.keys[key_hash] = metadata\r\n        print(f\"🔑 Created key '{name}' (ID: {key_id}, expires: {metadata['expires_at'].date()})\")\r\n\r\n        return {\"key\": raw_key, \"key_id\": key_id, \"metadata\": {k: v for k, v in metadata.items() if k != \"key_id\"}}\r\n\r\n    def validate_key(self, raw_key: str) -> Optional[Dict]:\r\n        \"\"\"Validate an API key and return its metadata.\"\"\"\r\n        key_hash = self._hash_key(raw_key)\r\n\r\n        if raw_key in self.revoked_keys:\r\n            return None\r\n\r\n        metadata = self.keys.get(key_hash)\r\n        if not metadata:\r\n            return None\r\n\r\n        # Check expiration\r\n        if metadata[\"expires_at\"] < datetime.utcnow():\r\n            metadata[\"status\"] = \"expired\"\r\n            return None\r\n\r\n        # Update usage\r\n        metadata[\"usage_count\"] += 1\r\n        metadata[\"last_used\"] = datetime.utcnow()\r\n\r\n        return metadata\r\n\r\n    def revoke_key(self, raw_key: str):\r\n        \"\"\"Revoke an API key immediately.\"\"\"\r\n        key_hash = self._hash_key(raw_key)\r\n        if key_hash in self.keys:\r\n            self.keys[key_hash][\"status\"] = \"revoked\"\r\n            self.revoked_keys.add(raw_key)\r\n            print(f\"🔴 Revoked key: {self.keys[key_hash]['name']}\")\r\n\r\n    def rotate_key(self, old_key: str) -> Optional[Dict]:\r\n        \"\"\"Rotate a key: revoke old, create new with same permissions.\"\"\"\r\n        metadata = self.validate_key(old_key)\r\n        if not metadata:\r\n            return None\r\n\r\n        new_key = self.create_key(\r\n            name=f\"{metadata['name']} (rotated)\",\r\n            permissions=metadata[\"permissions\"],\r\n            expires_in_days=90\r\n        )\r\n\r\n        self.revoke_key(old_key)\r\n        return new_key\r\n\r\n    def list_keys(self, status: str = \"active\") -> List[Dict]:\r\n        return [\r\n            {k: v for k, v in m.items() if k != \"key_id\"}\r\n            for m in self.keys.values()\r\n            if m[\"status\"] == status\r\n        ]\r\n\r\n    def cleanup_expired_keys(self):\r\n        \"\"\"Remove expired keys.\"\"\"\r\n        now = datetime.utcnow()\r\n        expired = [h for h, m in self.keys.items() if m[\"expires_at\"] < now]\r\n        for h in expired:\r\n            self.keys[h][\"status\"] = \"expired\"\r\n\r\n    def _hash_key(self, key: str) -> str:\r\n        return hashlib.sha256(key.encode()).hexdigest()\r\n\r\n## Simulated lifecycle\r\nkm = APIKeyManager()\r\n\r\nprod_key = km.create_key(\"production-llm\", [\"llm:read\", \"llm:write\"], rate_limit=5000)\r\ndev_key = km.create_key(\"development-llm\", [\"llm:read\"], rate_limit=100)\r\n\r\nprint(f\"\\nDev key: {dev_key['key'][:20]}...\")\r\nprint(f\"Validation: {km.validate_key(dev_key['key']) is not None}\")\r\n\r\n## Simulate rotation\r\nnew_prod_key = km.rotate_key(prod_key[\"key\"])\r\nprint(f\"New prod key ID: {new_prod_key['key_id']}\")\r\nprint(f\"Old key valid: {km.validate_key(prod_key['key']) is not None}\")\r\n\r\n## Cleanup\r\nkm.cleanup_expired_keys()\r\nprint(f\"\\nActive keys: {len(km.list_keys('active'))}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-vault-integration",
      children: "5.3 Vault Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HashiCorp Vault provides centralized secret storage with encryption, access control, and audit logging."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\r\nfrom datetime import datetime\r\nfrom typing import Optional, Dict, List\r\nimport requests\r\n\r\nclass VaultClient:\r\n    \"\"\"Simulated HashiCorp Vault client for secret management.\"\"\"\r\n\r\n    def __init__(self, vault_addr: str = \"http://vault:8200\", token: str = None):\r\n        self.addr = vault_addr\r\n        self.token = token\r\n        self._secrets = {}  # In-memory secret store (simulated)\r\n        self._policies = {}\r\n        self.audit_log = []\r\n\r\n    def authenticate(self, role: str, jwt: str = None) -> bool:\r\n        \"\"\"Authenticate to Vault.\"\"\"\r\n        # Simulated Kubernetes auth\r\n        print(f\"Authenticated to Vault with role: {role}\")\r\n        self.token = f\"vault-token-{role}\"\r\n        return True\r\n\r\n    def write_secret(self, path: str, data: Dict, version: int = None):\r\n        \"\"\"Write a secret to Vault.\"\"\"\r\n        if not self.token:\r\n            raise PermissionError(\"Not authenticated to Vault\")\r\n\r\n        if path not in self._secrets:\r\n            self._secrets[path] = []\r\n\r\n        entry = {\r\n            \"data\": data,\r\n            \"version\": version or len(self._secrets[path]) + 1,\r\n            \"created_at\": datetime.utcnow().isoformat(),\r\n            \"created_by\": self.token\r\n        }\r\n        self._secrets[path].append(entry)\r\n\r\n        self._log_audit(\"write\", path)\r\n        print(f\"📝 Written secret to {path} (v{entry['version']})\")\r\n\r\n    def read_secret(self, path: str, version: int = None) -> Optional[Dict]:\r\n        \"\"\"Read a secret from Vault.\"\"\"\r\n        if path not in self._secrets:\r\n            return None\r\n\r\n        versions = self._secrets[path]\r\n        if version:\r\n            entry = next((v for v in versions if v[\"version\"] == version), None)\r\n        else:\r\n            entry = versions[-1] if versions else None\r\n\r\n        if entry:\r\n            self._log_audit(\"read\", path)\r\n            return entry\r\n\r\n        return None\r\n\r\n    def list_secrets(self, path_prefix: str = \"\") -> List[str]:\r\n        \"\"\"List all secrets under a path prefix.\"\"\"\r\n        return [p for p in self._secrets.keys() if p.startswith(path_prefix)]\r\n\r\n    def delete_secret(self, path: str):\r\n        \"\"\"Delete a secret path.\"\"\"\r\n        if path in self._secrets:\r\n            del self._secrets[path]\r\n            self._log_audit(\"delete\", path)\r\n\r\n    def set_policy(self, name: str, rules: List[Dict]):\r\n        \"\"\"Set access policy.\"\"\"\r\n        self._policies[name] = rules\r\n        print(f\"Policy '{name}' set with {len(rules)} rules\")\r\n\r\n    def _log_audit(self, operation: str, path: str):\r\n        self.audit_log.append({\r\n            \"operation\": operation,\r\n            \"path\": path,\r\n            \"token\": self.token,\r\n            \"timestamp\": datetime.utcnow().isoformat()\r\n        })\r\n\r\n    def get_audit_log(self, n: int = 20) -> List[Dict]:\r\n        return self.audit_log[-n:]\r\n\r\n## Usage\r\nvault = VaultClient()\r\nvault.authenticate(\"ml-service\")\r\n\r\n## Store LLM API keys\r\nvault.write_secret(\"llm/openai/prod\", {\r\n    \"api_key\": \"sk-prod-...\",\r\n    \"organization\": \"org-123\",\r\n    \"rate_limit\": 5000\r\n})\r\n\r\nvault.write_secret(\"llm/anthropic/prod\", {\r\n    \"api_key\": \"sk-ant-prod-...\",\r\n    \"rate_limit\": 3000\r\n})\r\n\r\n## Store database credentials\r\nvault.write_secret(\"database/vector-db\", {\r\n    \"host\": \"qdrant.internal:6333\",\r\n    \"api_key\": \"qdrant-secret-key\",\r\n    \"tls_enabled\": True\r\n})\r\n\r\n## Set policies\r\nvault.set_policy(\"ml-engineer\", [\r\n    {\"path\": \"llm/*\", \"capabilities\": [\"read\"]},\r\n    {\"path\": \"database/*\", \"capabilities\": [\"read\"]}\r\n])\r\n\r\n## Read back\r\nsecret = vault.read_secret(\"llm/openai/prod\")\r\nprint(f\"\\nOpenAI key stored: {secret['data']['api_key'][:15]}...\")\r\n\r\nprint(f\"Audit entries: {len(vault.get_audit_log())}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic secrets for database access"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DynamicSecretEngine:\r\n    \"\"\"Generate time-limited database credentials.\"\"\"\r\n\r\n    def __init__(self, vault_client: VaultClient):\r\n        self.vault = vault_client\r\n        self.active_leases = {}\r\n\r\n    def generate_credentials(self, db_name: str, ttl_seconds: int = 3600) -> Dict:\r\n        \"\"\"Generate temporary database credentials.\"\"\"\r\n        import secrets\r\n        lease_id = secrets.token_hex(8)\r\n\r\n        creds = {\r\n            \"username\": f\"ml-{db_name}-{lease_id[:6]}\",\r\n            \"password\": secrets.token_urlsafe(16),\r\n            \"database\": db_name,\r\n            \"lease_id\": lease_id,\r\n            \"ttl\": ttl_seconds,\r\n            \"expires_at\": (datetime.utcnow() + timedelta(seconds=ttl_seconds)).isoformat()\r\n        }\r\n\r\n        self.active_leases[lease_id] = creds\r\n        print(f\"🔑 Generated dynamic credentials for {db_name} (lease: {lease_id}, TTL: {ttl_seconds}s)\")\r\n        return creds\r\n\r\n    def renew_lease(self, lease_id: str, extend_seconds: int = 3600) -> bool:\r\n        if lease_id in self.active_leases:\r\n            self.active_leases[lease_id][\"expires_at\"] = (datetime.utcnow() + timedelta(seconds=extend_seconds)).isoformat()\r\n            print(f\"Renewed lease {lease_id} (+{extend_seconds}s)\")\r\n            return True\r\n        return False\r\n\r\n    def revoke_lease(self, lease_id: str):\r\n        if lease_id in self.active_leases:\r\n            del self.active_leases[lease_id]\r\n            print(f\"Revoked lease {lease_id}\")\r\n\r\ndyn = DynamicSecretEngine(vault)\r\ncreds = dyn.generate_credentials(\"analytics_db\", ttl_seconds=300)\r\nprint(f\"Temp user: {creds['username']}, expires: {creds['expires_at']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-environment-configuration",
      children: "5.4 Environment Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different environments (dev, staging, prod) need different secrets with strict isolation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pathlib import Path\r\nimport os\r\n\r\nclass EnvironmentSecretManager:\r\n    \"\"\"Manage secrets across environments with strict isolation.\"\"\"\r\n\r\n    def __init__(self, base_path: str = \".secrets\"):\r\n        self.base_path = Path(base_path)\r\n        self.environments = [\"development\", \"staging\", \"production\"]\r\n\r\n    def init_environment(self, env: str):\r\n        \"\"\"Initialize secret storage for an environment.\"\"\"\r\n        env_path = self.base_path / env\r\n        env_path.mkdir(parents=True, exist_ok=True)\r\n        (env_path / \".gitignore\").write_text(\"*\")\r\n        print(f\"Initialized secret store for {env}\")\r\n\r\n    def set_secret(self, env: str, key: str, value: str):\r\n        \"\"\"Store a secret for a specific environment.\"\"\"\r\n        env_file = self.base_path / env / f\"{key}.secret\"\r\n        env_file.write_text(value)\r\n        print(f\"Set {key} for {env}\")\r\n\r\n    def get_secret(self, env: str, key: str) -> Optional[str]:\r\n        env_file = self.base_path / env / f\"{key}.secret\"\r\n        if env_file.exists():\r\n            return env_file.read_text()\r\n        return None\r\n\r\n    def list_secrets(self, env: str) -> List[str]:\r\n        env_path = self.base_path / env\r\n        if env_path.exists():\r\n            return [f.stem for f in env_path.glob(\"*.secret\")]\r\n        return []\r\n\r\n    def validate_environment(self, env: str) -> Dict:\r\n        \"\"\"Validate that all required secrets exist for an environment.\"\"\"\r\n        required_secrets = {\r\n            \"development\": [\"openai_api_key\", \"database_url\"],\r\n            \"staging\": [\"openai_api_key\", \"database_url\", \"model_registry_token\"],\r\n            \"production\": [\"openai_api_key\", \"database_url\", \"model_registry_token\", \"encryption_key\", \"webhook_secret\"],\r\n        }\r\n\r\n        required = required_secrets.get(env, [])\r\n        existing = self.list_secrets(env)\r\n        missing = [s for s in required if s not in existing]\r\n\r\n        return {\r\n            \"environment\": env,\r\n            \"required\": len(required),\r\n            \"present\": len(existing),\r\n            \"missing\": missing,\r\n            \"valid\": len(missing) == 0\r\n        }\r\n\r\nems = EnvironmentSecretManager()\r\nems.init_environment(\"production\")\r\nems.set_secret(\"production\", \"openai_api_key\", \"sk-prod-...\")\r\nems.set_secret(\"production\", \"database_url\", \"postgresql://prod:pass@db:5432/ml\")\r\n\r\nvalidation = ems.validate_environment(\"production\")\r\nprint(f\"Production secrets: {validation['present']}/{validation['required']} valid={validation['valid']}\")\r\nif not validation[\"valid\"]:\r\n    print(f\"Missing: {validation['missing']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment-aware secret resolution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SecretResolver:\r\n    \"\"\"Resolve secrets with environment fallback chain.\"\"\"\r\n\r\n    def __init__(self):\r\n        self.sources = []\r\n\r\n    def add_source(self, name: str, resolver_fn):\r\n        self.sources.append((name, resolver_fn))\r\n\r\n    def resolve(self, secret_name: str, environment: str = \"production\") -> Optional[str]:\r\n        for source_name, resolver_fn in self.sources:\r\n            value = resolver_fn(secret_name, environment)\r\n            if value:\r\n                return value\r\n        return None\r\n\r\nresolver = SecretResolver()\r\nresolver.add_source(\"vault\", lambda n, e: f\"vault-{e}-{n}\" if n == \"openai_api_key\" else None)\r\nresolver.add_source(\"env_var\", lambda n, e: os.environ.get(n.upper()))\r\nresolver.add_source(\"file\", lambda n, e: Path(f\".secrets/{e}/{n}.secret\").read_text() if Path(f\".secrets/{e}/{n}.secret\").exists() else None)\r\n\r\n## os.environ[\"OPENAI_API_KEY\"] = \"sk-env-...\"\r\nvalue = resolver.resolve(\"openai_api_key\", \"production\")\r\nprint(f\"Resolved: {value}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-audit--monitoring",
      children: "5.5 Audit & Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Audit logging tracks who accessed which secrets and when, enabling security incident investigation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\r\nfrom datetime import datetime\r\nfrom typing import Dict, List, Optional\r\n\r\nclass SecretAuditLogger:\r\n    \"\"\"Audit logging for secret access.\"\"\"\r\n\r\n    def __init__(self, log_path: str = \"secret_audit.log\"):\r\n        self.log_path = log_path\r\n        self.entries = []\r\n\r\n    def log_access(self, secret_name: str, user: str, action: str, source_ip: str = None, success: bool = True):\r\n        entry = {\r\n            \"timestamp\": datetime.utcnow().isoformat(),\r\n            \"secret\": secret_name,\r\n            \"user\": user,\r\n            \"action\": action,\r\n            \"source_ip\": source_ip,\r\n            \"success\": success\r\n        }\r\n        self.entries.append(entry)\r\n        self._write_entry(entry)\r\n\r\n    def _write_entry(self, entry: Dict):\r\n        with open(self.log_path, \"a\") as f:\r\n            f.write(json.dumps(entry) + \"\\n\")\r\n\r\n    def query(self, user: str = None, secret: str = None, action: str = None, limit: int = 100) -> List[Dict]:\r\n        results = self.entries\r\n        if user:\r\n            results = [e for e in results if e[\"user\"] == user]\r\n        if secret:\r\n            results = [e for e in results if e[\"secret\"] == secret]\r\n        if action:\r\n            results = [e for e in results if e[\"action\"] == action]\r\n        return results[-limit:]\r\n\r\n    def detect_anomalies(self) -> List[Dict]:\r\n        \"\"\"Detect suspicious secret access patterns.\"\"\"\r\n        anomalies = []\r\n\r\n        # Failed access attempts\r\n        failed = [e for e in self.entries if not e[\"success\"]]\r\n        if len(failed) > 5:\r\n            anomalies.append({\r\n                \"type\": \"multiple_failures\",\r\n                \"count\": len(failed),\r\n                \"users\": list(set(e[\"user\"] for e in failed)),\r\n                \"severity\": \"warning\"\r\n            })\r\n\r\n        # Unusual access times\r\n        for entry in self.entries:\r\n            hour = int(entry[\"timestamp\"].split(\"T\")[1].split(\":\")[0])\r\n            if hour < 6 or hour > 22:\r\n                anomalies.append({\r\n                    \"type\": \"unusual_time\",\r\n                    \"secret\": entry[\"secret\"],\r\n                    \"user\": entry[\"user\"],\r\n                    \"time\": entry[\"timestamp\"],\r\n                    \"severity\": \"info\"\r\n                })\r\n\r\n        return anomalies\r\n\r\nlogger = SecretAuditLogger()\r\nlogger.log_access(\"openai_api_key\", \"alice\", \"read\", \"10.0.1.50\")\r\nlogger.log_access(\"openai_api_key\", \"bob\", \"read\", \"10.0.1.51\")\r\nlogger.log_access(\"database_url\", \"alice\", \"read\", \"10.0.1.50\")\r\nlogger.log_access(\"openai_api_key\", \"unknown\", \"read\", \"203.0.113.5\", success=False)\r\n\r\nanomalies = logger.detect_anomalies()\r\nprint(f\"Anomalies detected: {len(anomalies)}\")\r\nfor a in anomalies:\r\n    print(f\"  [{a['severity'].upper()}] {a['type']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secret scanning in code"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\r\n\r\nclass SecretScanner:\r\n    \"\"\"Scan code for accidentally committed secrets.\"\"\"\r\n\r\n    PATTERNS = {\r\n        \"AWS Key\": r\"AKIA[0-9A-Z]{16}\",\r\n        \"GitHub Token\": r\"gh[pousr]_[A-Za-z0-9_]{36,}\",\r\n        \"OpenAI Key\": r\"sk-[A-Za-z0-9]{32,}\",\r\n        \"Generic API Key\": r\"(?i)(api[_-]?key|apikey|secret)[\\s]*[:=][\\s]*['\\\"][A-Za-z0-9_\\-]{16,}['\\\"]\",\r\n        \"Private Key\": r\"-----BEGIN (RSA |EC )?PRIVATE KEY-----\",\r\n        \"Database URL\": r\"postgres(ql)?://\\w+:\\w+@\",\r\n        \"JWT Token\": r\"eyJ[A-Za-z0-9_\\-]{20,}\\.[A-Za-z0-9_\\-]{20,}\\.[A-Za-z0-9_\\-]{20,}\",\r\n    }\r\n\r\n    def __init__(self):\r\n        self.compiled = {name: re.compile(pattern) for name, pattern in self.PATTERNS.items()}\r\n\r\n    def scan_file(self, file_path: str) -> List[Dict]:\r\n        findings = []\r\n        try:\r\n            with open(file_path, \"r\") as f:\r\n                for i, line in enumerate(f, 1):\r\n                    for name, pattern in self.compiled.items():\r\n                        if pattern.search(line):\r\n                            findings.append({\r\n                                \"file\": file_path,\r\n                                \"line\": i,\r\n                                \"type\": name,\r\n                                \"snippet\": line.strip()[:80]\r\n                            })\r\n        except Exception as e:\r\n            pass\r\n        return findings\r\n\r\n    def scan_directory(self, directory: str, exclude_patterns: List[str] = None) -> List[Dict]:\r\n        all_findings = []\r\n        for root, dirs, files in os.walk(directory):\r\n            # Skip .git and node_modules\r\n            dirs[:] = [d for d in dirs if d not in [\".git\", \"node_modules\", \"__pycache__\", \".venv\"]]\r\n            for file in files:\r\n                file_path = os.path.join(root, file)\r\n                if any(file.endswith(ext) for ext in [\".py\", \".ts\", \".js\", \".yaml\", \".yml\", \".json\", \".env\", \".sh\"]):\r\n                    findings = self.scan_file(file_path)\r\n                    all_findings.extend(findings)\r\n        return all_findings\r\n\r\nscanner = SecretScanner()\r\ntest_file = \"test_config.py\"\r\nwith open(test_file, \"w\") as f:\r\n    f.write(\"openai_api_key = 'sk-test123456789012345678901234567'\\n\")\r\n\r\nfindings = scanner.scan_file(test_file)\r\nfor f in findings:\r\n    print(f\"🔴 Found {f['type']} at {f['file']}:{f['line']}\")\r\n    print(f\"   {f['snippet']}\")\r\n\r\nos.remove(test_file)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-zero-trust-architecture",
      children: "5.6 Zero-Trust Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zero-trust for ML systems means no implicit trust based on network location — every request must authenticate and authorize."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import hashlib\r\nimport hmac\r\nimport time\r\nfrom typing import Optional, Dict\r\nimport jwt as pyjwt\r\n\r\nclass ZeroTrustAuth:\r\n    \"\"\"Zero-trust authentication for model API access.\"\"\"\r\n\r\n    def __init__(self, secret_key: str):\r\n        self.secret_key = secret_key\r\n\r\n    def generate_service_token(self, service_name: str, permissions: list, ttl_seconds: int = 3600) -> str:\r\n        \"\"\"Generate a signed JWT for service-to-service auth.\"\"\"\r\n        payload = {\r\n            \"sub\": service_name,\r\n            \"permissions\": permissions,\r\n            \"iat\": int(time.time()),\r\n            \"exp\": int(time.time()) + ttl_seconds,\r\n            \"jti\": hashlib.md5(f\"{service_name}-{time.time()}\".encode()).hexdigest()[:16]\r\n        }\r\n        return pyjwt.encode(payload, self.secret_key, algorithm=\"HS256\")\r\n\r\n    def verify_token(self, token: str) -> Optional[Dict]:\r\n        \"\"\"Verify and decode a service token.\"\"\"\r\n        try:\r\n            payload = pyjwt.decode(token, self.secret_key, algorithms=[\"HS256\"])\r\n            return payload\r\n        except pyjwt.ExpiredSignatureError:\r\n            print(\"Token expired\")\r\n            return None\r\n        except pyjwt.InvalidTokenError:\r\n            print(\"Invalid token\")\r\n            return None\r\n\r\n    def require_permission(self, token: str, required_perm: str) -> bool:\r\n        \"\"\"Check if token has required permission.\"\"\"\r\n        payload = self.verify_token(token)\r\n        if not payload:\r\n            return False\r\n        permissions = payload.get(\"permissions\", [])\r\n        return required_perm in permissions\r\n\r\n## Zero-trust middleware\r\nclass ZeroTrustMiddleware:\r\n    def __init__(self, auth: ZeroTrustAuth):\r\n        self.auth = auth\r\n\r\n    def authenticate_request(self, request_headers: Dict) -> Dict:\r\n        \"\"\"Authenticate and authorize an API request.\"\"\"\r\n        auth_header = request_headers.get(\"Authorization\", \"\")\r\n        if not auth_header.startswith(\"Bearer \"):\r\n            return {\"authenticated\": False, \"reason\": \"Missing or invalid Authorization header\"}\r\n\r\n        token = auth_header[7:]\r\n        payload = self.auth.verify_token(token)\r\n        if not payload:\r\n            return {\"authenticated\": False, \"reason\": \"Invalid or expired token\"}\r\n\r\n        return {\r\n            \"authenticated\": True,\r\n            \"service\": payload[\"sub\"],\r\n            \"permissions\": payload[\"permissions\"],\r\n            \"token_id\": payload[\"jti\"]\r\n        }\r\n\r\n## mTLS for transport security\r\nclass mTLSConfig:\r\n    \"\"\"Mutual TLS configuration for model serving.\"\"\"\r\n\r\n    def __init__(self, cert_path: str, key_path: str, ca_path: str):\r\n        self.cert_path = cert_path\r\n        self.key_path = key_path\r\n        self.ca_path = ca_path\r\n\r\n    def get_ssl_context(self):\r\n        \"\"\"Get SSL context for mTLS.\"\"\"\r\n        import ssl\r\n        context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)\r\n        context.load_cert_chain(self.cert_path, self.key_path)\r\n        context.load_verify_locations(cafile=self.ca_path)\r\n        context.verify_mode = ssl.CERT_REQUIRED\r\n        return context\r\n\r\n## Simulated zero-trust flow\r\nauth = ZeroTrustAuth(\"super-secret-key-2025\")\r\nztmw = ZeroTrustMiddleware(auth)\r\n\r\ntoken = auth.generate_service_token(\"model-serving-v2\", [\"llm:inference\", \"model:read\"])\r\nprint(f\"Token: {token[:50]}...\")\r\n\r\nrequest = {\"Authorization\": f\"Bearer {token}\"}\r\nresult = ztmw.authenticate_request(request)\r\nprint(f\"Authenticated: {result['authenticated']}, Service: {result.get('service', 'N/A')}\")\r\n\r\n## Permission check\r\ncan_infer = auth.require_permission(token, \"llm:inference\")\r\nprint(f\"Can infer: {can_infer}\")\r\n\r\n## Expired token test (simulated)\r\ntime.sleep(0.1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript secret management\r\nimport { createHash, randomBytes } from \"crypto\";\r\n\r\ninterface SecretEntry {\r\n  key: string;\r\n  value: string;\r\n  environment: string;\r\n  expiresAt: Date;\r\n}\r\n\r\nclass SecretVault {\r\n  private secrets: Map<string, SecretEntry> = new Map();\r\n\r\n  set(key: string, value: string, env: string, ttlMs: number = 3600000): void {\r\n    this.secrets.set(`${env}:${key}`, { key, value, environment: env, expiresAt: new Date(Date.now() + ttlMs) });\r\n  }\r\n\r\n  get(key: string, env: string): string | null {\r\n    const entry = this.secrets.get(`${env}:${key}`);\r\n    if (!entry || entry.expiresAt < new Date()) return null;\r\n    return entry.value;\r\n  }\r\n\r\n  rotate(key: string, env: string): string {\r\n    const newValue = randomBytes(32).toString(\"hex\");\r\n    this.set(key, newValue, env);\r\n    return newValue;\r\n  }\r\n}\r\n\r\nconst vault = new SecretVault();\r\nvault.set(\"openai_key\", \"sk-test...\", \"production\");\r\nconsole.log(vault.get(\"openai_key\", \"production\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI applications manage more secrets than traditional apps: LLM keys, model registry tokens, vector DB credentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API key lifecycle includes creation, distribution, usage tracking, rotation, and revocation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HashiCorp Vault provides encrypted secret storage with policies and audit logging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic secrets generate time-limited credentials for database access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Environment-specific secret configuration enforces isolation between dev/staging/prod"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Audit logging tracks who accessed which secret, enabling anomaly detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secret scanning in codebases prevents accidental credential commits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero-trust architecture requires authentication and authorization for every API call"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mTLS provides transport-layer security with mutual certificate verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secret rotation should be automated with notification to affected services"
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
            children: "Storing API keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vault or secrets manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoding in source code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated rotation every 90 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never rotating keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate secret stores per environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharing secrets across environments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT tokens with short TTL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-lived static tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-commit hooks for secret detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Committing secrets even temporarily"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log every secret access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No audit trail"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s05-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What secrets do AI/LLM applications manage that traditional apps don't?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "AI-specific secrets include: LLM provider API keys (OpenAI, Anthropic), model registry tokens (MLflow, Hugging Face), vector database credentials (Pinecone, Qdrant, Weaviate), embedding API keys, fine-tuning data access tokens, and model encryption keys. Each of these represents a unique security risk if leaked."
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
      "data-qid": "ai-sec-s05-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How does HashiCorp Vault work for secret management?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vault stores secrets encrypted at rest and in transit. Clients authenticate via tokens, Kubernetes auth, or LDAP. Access policies define who can read/write which paths. Vault supports: static secrets (API keys), dynamic secrets (time-limited DB creds), and encryption-as-a-service. All access is logged for audit."
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
      "data-qid": "ai-sec-s05-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the API key lifecycle?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create → Distribute → Track → Rotate → Revoke. Create with metadata (name, permissions, expiry). Distribute securely (not in code, logs, or chat). Track usage patterns. Rotate periodically (90 days recommended) or immediately if compromised. Revoke by invalidating the key hash and removing from active set."
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
      "data-qid": "ai-sec-s05-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: How do dynamic secrets work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dynamic secrets generate credentials on-demand with a limited time-to-live (TTL). The application requests credentials from Vault, gets a username/password pair that works for N minutes, uses it, then the credentials expire. This eliminates long-lived static credentials that could be stolen. Vault manages the lease lifecycle: create, renew, revoke."
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
      "data-qid": "ai-sec-s05-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How do you detect secrets accidentally committed to Git?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use pre-commit hooks with tools like git-secrets, truffleHog, or Gitleaks. These scan staged files for patterns (AWS keys, API keys, private keys, database URLs). Also scan Git history for past leaks. Set up server-side scanning in CI/CD. If a secret is committed, rotate it immediately and purge from Git history."
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
      "data-qid": "ai-sec-s05-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you implement zero-trust for model serving?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Every request must authenticate and authorize: (1) Service identity via mTLS certificates, (2) JWT tokens with short TTL and permission claims, (3) Request-level authorization checking required scopes, (4) Rate limiting per identity, (5) Audit logging of all requests. No implicit trust based on network (VPC, internal IP)."
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
      "data-qid": "ai-sec-s05-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: How do you handle secrets in CI/CD pipelines?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use CI/CD platform secret stores (GitHub Actions secrets, GitLab CI variables). Never expose secrets in logs, build output, or error messages. Use environment-specific variables. For ML pipelines, authenticate to Vault from CI using OIDC/JWT tokens. Scan pipeline output for accidental secret exposure."
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
      "data-qid": "ai-sec-s05-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What is a secret zero-trust architecture for LLM API keys?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The application never directly holds LLM API keys. Instead: (1) A proxy/service mesh handles LLM API calls, (2) The proxy authenticates to Vault,.\nretrieves the key, calls the LLM, (3) The key is held in memory only, never written to disk, (4) Downstream services authenticate to the proxy via mTLS + JWT,.\n(5) The proxy enforces rate limits and audits all usage."
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
      "data-qid": "ai-sec-s05-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you rotate secrets without downtime?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement dual-key support: maintain two valid keys during rotation. Steps: (1) Deploy new key alongside old, (2) Update all services to use new key,.\n(3) Verify all services work with new key, (4) Revoke old key. For services that can't be updated simultaneously, have a grace period where both keys are valid. Automate the entire process."
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
      "data-qid": "ai-sec-s05-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What audit log entries should you track for secret management?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Track: (1) Secret reads — who, when, which secret, source IP, (2) Secret writes/updates, (3) Key rotation events, (4) Failed access attempts (especially repeated), (5) Policy changes, (6) Lease creation/renewal/revocation for dynamic secrets, (7) Access from unusual locations or times. Store logs in immutable storage with alerting on anomalies."
        }), "\n  "]
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
      }), ": What is the recommended API key rotation period?\r\na) 7 days\r\nb) 30 days\r\nc) 90 days\r\nd) 365 days"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s05-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) 90 days"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Industry best practice recommends rotating API keys every 90 days."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does HashiCorp Vault provide for secret management?\r\na) Only encryption\r\nb) Encrypted storage, access policies, audit logging\r\nc) Only key generation\r\nd) Only key rotation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s05-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Encrypted storage, access policies, audit logging"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Vault provides comprehensive secret management with policies, audit, and dynamic secrets."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What is a dynamic secret?\r\na) A secret that changes every second\r\nb) A time-limited credential generated on demand\r\nc) An encrypted static key\r\nd) A user-provided password"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s05-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) A time-limited credential generated on demand"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Dynamic secrets have finite TTL and expire automatically, eliminating long-lived credentials."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the primary benefit of zero-trust for model serving?\r\na) Lower latency\r\nb) No implicit trust — every request must authenticate\r\nc) Simpler architecture\r\nd) Lower cost"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s05-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) No implicit trust — every request must authenticate"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Zero-trust removes implicit network trust and requires authentication for every request."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What should you do if a secret is accidentally committed to Git?\r\na) Nothing, just leave it\r\nb) Rotate the secret immediately and purge from Git history\r\nc) Delete the file only\r\nd) Change the file permission"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "ai-sec-s05-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Rotate the secret immediately and purge from Git history"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Once a secret is committed, it's compromised — rotate it and remove from history."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement an APIKeyManager with create, validate, and revoke methods. Test the full lifecycle."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Build a VaultClient with write, read, list, and delete operations. Add audit logging for operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a SecretScanner that detects AWS keys, GitHub tokens, and OpenAI keys in files."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a ZeroTrustAuth system with JWT generation, token verification, and permission checking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a complete secret management system with vault integration, environment separation, audit logging, and anomaly detection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
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
            children: "Explain the core idea of Secret and Key Management in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Secret and Key Management."
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
            children: "Describe a production bug caused by misunderstanding Secret and Key Management. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Secret and Key Management from 10 users to 10 million?"
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
            children: "Compare Secret and Key Management with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Secret and Key Management."
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
            children: "How does Secret and Key Management behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Secret and Key Management run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Secret and Key Management that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Secret and Key Management explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Secret and Key Management\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Secret and Key Management to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Secret and Key Management (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Secret and Key Management and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Secret and Key Management-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Secret and Key Management interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Secret and Key Management in production today?"
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
        }), " Secret and Key Management builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Secret and Key Management before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Secret and Key Management is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Secret and Key Management in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Secret and Key Management chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Secret and Key Management is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 05 Secret And Key Management is ___. — Answer: O(1) for hash lookup, O(n) for brute force"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 05 Secret And Key Management is ___. — Answer: SQL injection, prompt injection, key exposure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Secret and Key Management issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Secret and Key Management in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Secret and Key Management that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Secret and Key Management is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Secret and Key Management in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Secret and Key Management and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Secret and Key Management on an empty input?"
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
            children: "Complete Medium exercises, explain Secret and Key Management to someone else"
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
        children: "Always write a one-line example of Secret and Key Management from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Secret and Key Management when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Secret and Key Management twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Secret and Key Management snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Secret and Key Management listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Secret and Key Management to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Secret and Key Management by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Secret and Key Management to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
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
        children: "GitHub repositories of production implementations and Key Management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 17 — builds the foundation for 05 Secret And Key Management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 05 Secret And Key Management with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 05 Secret And Key Management fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 05 Secret And Key Management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 05 Secret And Key Management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 05 Secret And Key Management?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 05 Secret And Key Management?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 05 Secret And Key Management asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 05 Secret And Key Management?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secret and Key Management is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Secret and Key Management."
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
        children: "Secret and Key Management emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Secret and Key Management today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Secret and Key Management — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Secret and Key Management changes quickly; focus on fundamentals that remain stable."
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
            children: "05 Secret And Key Management is like a GPS navigation system"
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
          }), " — this chapter contributes the Secret and Key Management skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-05secretandkeymanagement-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of Secret and Key Management in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the Theory section and write a one-sentence definition that includes: what it is, how it works, and why it matters for production AI engineering."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-05secretandkeymanagement-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The most common mistake is skipping edge cases. Always handle empty input, null values, and boundary conditions before implementing the happy path."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-05secretandkeymanagement-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard Secret and Key Management approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Time complexity depends on the algorithm chosen. Space complexity depends on whether you store intermediate results. Always state both for interview answers."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-05secretandkeymanagement-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is Secret and Key Management NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "This technique is not the right choice when simpler alternatives suffice, when the overhead exceeds the benefit, or when the team lacks the expertise to maintain it."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "17aisecurityguardrails-05secretandkeymanagement-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is Secret and Key Management applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production stack: use the libraries shown in the code examples, add monitoring with Prometheus/Grafana, test with pytest, and lint with ruff."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Secret and Key Management (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Secret and Key Management (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Secret and Key Management-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Secret and Key Management in production at scale"
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
        children: "cProfile / py-spy for performance profiling and Key Management"
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
        }), ": Add structured logging at each stage of the 05 Secret And Key Management pipeline to identify exactly where the failure occurs."]
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
        children: "Explain Secret and Key Management in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Secret and Key Management."
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
        children: "Tell me about a time you debugged a Secret and Key Management problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Secret and Key Management is used at scale?"
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
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_05_secret_and_key_management(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 05 Secret And Key Management.\r\n\r\n    Key concepts: authentication, authorization, encryption, injection, XSS\r\n    Complexity: O(1) for hash lookup, O(n) for brute force\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 05 Secret And Key Management here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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
            children: "Explain Secret and Key Management without notes"
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
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/06-compliance-and-ethics",
        children: "Compliance and Ethics"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secret and Key Management, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Secret and Key Management depends on input size and distribution — always benchmark for your own data."
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