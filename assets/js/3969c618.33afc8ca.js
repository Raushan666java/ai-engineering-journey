"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[38976],{

/***/ 96094
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_04_git_linux_cli_07_ssh_and_remote_access_md_396_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-04-git-linux-cli-07-ssh-and-remote-access-md-396.json
const site_docs_courses_ai_engineering_placement_04_git_linux_cli_07_ssh_and_remote_access_md_396_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/git-linux-cli/07-ssh-and-remote-access","title":"SSH & Remote Access — Secure Shell, Key Management, Tunneling","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access.md","sourceDirName":"courses/ai-engineering-placement/04-git-linux-cli","slug":"/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":64,"frontMatter":{"id":"07-ssh-and-remote-access","slug":"/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access","title":"SSH & Remote Access — Secure Shell, Key Management, Tunneling","sidebar_label":"SSH & Remote Access — Secure Shell, Key Management, Tunneling","sidebar_position":64},"sidebar":"placementSidebar","previous":{"title":"DevOps Automation","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/06-networking-and-security"},"next":{"title":"Process Management — Monitoring, Signals, Resource Control","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/08-process-management"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access.md


const frontMatter = {
	id: '07-ssh-and-remote-access',
	slug: '/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access',
	title: 'SSH & Remote Access — Secure Shell, Key Management, Tunneling',
	sidebar_label: 'SSH & Remote Access — Secure Shell, Key Management, Tunneling',
	sidebar_position: 64
};
const contentTitle = 'SSH & Remote Access — Secure Shell, Key Management, Tunneling';

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
  "value": "SSH Protocol Architecture",
  "id": "ssh-protocol-architecture",
  "level": 3
}, {
  "value": "SSH Handshake Flow",
  "id": "ssh-handshake-flow",
  "level": 3
}, {
  "value": "SSH Key Generation",
  "id": "ssh-key-generation",
  "level": 3
}, {
  "value": "SSH Agent",
  "id": "ssh-agent",
  "level": 3
}, {
  "value": "SSH Config File",
  "id": "ssh-config-file",
  "level": 3
}, {
  "value": "SSH into Servers",
  "id": "ssh-into-servers",
  "level": 3
}, {
  "value": "Port Forwarding &amp; Tunneling",
  "id": "port-forwarding--tunneling",
  "level": 3
}, {
  "value": "SCP &amp; Rsync",
  "id": "scp--rsync",
  "level": 3
}, {
  "value": "SSH Security Hardening",
  "id": "ssh-security-hardening",
  "level": 3
}, {
  "value": "SSH in AI Engineering Workflows",
  "id": "ssh-in-ai-engineering-workflows",
  "level": 3
}, {
  "value": "SSH Tunneling for Model Serving",
  "id": "ssh-tunneling-for-model-serving",
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
        id: "ssh--remote-access--secure-shell-key-management-tunneling",
        children: "SSH & Remote Access — Secure Shell, Key Management, Tunneling"
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
            children: "Understand SSH protocol architecture and handshake flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generate and manage SSH keys (Ed25519, RSA) with ssh-agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure SSH client and server using config files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up port forwarding, SSH tunnels, and jump hosts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transfer files securely using scp and rsync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply SSH for secure remote access in AI/ML workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSH (Secure Shell) is the standard protocol for secure remote access to servers, containers, and cloud instances. AI engineers use SSH daily to access training machines, deploy models, transfer datasets, and manage infrastructure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Linux command line knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of TCP/IP and port numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with terminal and shell environments"
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
      id: "ssh-protocol-architecture",
      children: "SSH Protocol Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSH operates on a client-server model using TCP port 22 by default. The protocol has three layers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transport Layer"
        }), " — Server authentication, key exchange, encryption, integrity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Authentication Layer"
        }), " — Verifies the client to the server (password, public key, keyboard-interactive)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection Layer"
        }), " — Multiplexes multiple channels over one connection (shell, exec, tunnel, X11)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-handshake-flow",
      children: "SSH Handshake Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant C as SSH Client\n    participant S as SSH Server\n    C->>S: TCP Connection (port 22)\n    S->>C: Server Host Key + Protocol Version\n    C->>C: Verify Host Key Fingerprint\n    C->>S: Diffie-Hellman Key Exchange Init\n    S->>C: DH Reply + Server Public Key\n    C->>C: Compute Shared Secret\n    C->>S: Encrypted Session Established\n    C->>S: Authentication Request (Public Key)\n    S->>C: Challenge: Sign Random Data\n    C->>C: Sign with Private Key\n    C->>S: Signed Response\n    S->>C: Authentication Success\n    C->>S: Open Shell/Exec Channel\n    S->>C: Channel Opened\n    Note over C,S: Encrypted Data Flow\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key exchange algorithms"
      }), ": Diffie-Hellman (DH), Elliptic Curve DH (ECDH), Curve25519."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symmetric ciphers"
      }), ": AES-256-GCM, ChaCha20-Poly1305, AES-128-CTR."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host key types"
      }), ": RSA (2048/4096 bit), ECDSA (256/384/521 bit), Ed25519 (256 bit)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-key-generation",
      children: "SSH Key Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ed25519 is the recommended key type — faster, smaller, and more secure than RSA."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate Ed25519 key (recommended)\nssh-keygen -t ed25519 -C \"user@example.com\"\n\n# Generate RSA key (for legacy systems)\nssh-keygen -t rsa -b 4096 -C \"user@example.com\"\n\n# Specify custom file location\nssh-keygen -t ed25519 -f ~/.ssh/github-key -C \"github@example.com\"\n\n# View key fingerprint\nssh-keygen -lf ~/.ssh/id_ed25519\n\n# View key in visual (ASCII art) format\nssh-keygen -lvf ~/.ssh/id_ed25519\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key types comparison"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bit Length"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compatibility"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ed25519"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern systems only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256/384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-agent",
      children: "SSH Agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ssh-agent holds decrypted private keys in memory so you don't re-enter passphrases."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Start ssh-agent in background\neval \"$(ssh-agent -s)\"\n\n# Add default key\nssh-add ~/.ssh/id_ed25519\n\n# Add key with timeout (1 hour)\nssh-add -t 3600 ~/.ssh/id_ed25519\n\n# List loaded keys\nssh-add -l\n\n# List with fingerprints\nssh-add -L\n\n# Remove all keys\nssh-add -D\n\n# Automatic agent on macOS (keychain)\nssh-add --apple-use-keychain ~/.ssh/id_ed25519\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent forwarding"
      }), " forwards your local agent to remote servers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enable agent forwarding\nssh -A user@remote-server\n\n# In SSH config\nHost *\n  ForwardAgent yes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning"
      }), ": Only use agent forwarding with trusted servers. An attacker with root on the remote can use your agent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-config-file",
      children: "SSH Config File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The config file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.ssh/config"
      }), " simplifies connections with host aliases and options."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Default settings for all hosts\nHost *\n  AddKeysToAgent yes\n  UseKeychain yes\n  ServerAliveInterval 60\n  ServerAliveCountMax 3\n  Compression yes\n  LogLevel INFO\n\n# GitHub\nHost github.com\n  HostName github.com\n  User git\n  IdentityFile ~/.ssh/github-key\n  IdentitiesOnly yes\n\n# EC2 instance with short alias\nHost ml-server\n  HostName ec2-54-123-45-67.compute-1.amazonaws.com\n  User ubuntu\n  Port 22\n  IdentityFile ~/.ssh/ml-key.pem\n  ForwardAgent no\n  LocalForward 8888 localhost:8888\n\n# Jump host pattern\nHost jump-server\n  HostName jump.example.com\n  User admin\n  IdentityFile ~/.ssh/jump-key\n\nHost internal-*\n  User appuser\n  IdentityFile ~/.ssh/internal-key\n  ProxyJump jump-server\n  ForwardAgent no\n\n# Bastion host direct connection\nHost bastion\n  HostName bastion.example.com\n  User admin\n  IdentityFile ~/.ssh/bastion-key\n  LocalForward 5432 database.internal:5432\n\n# Match patterns\nHost *.compute.amazonaws.com\n  User ec2-user\n  IdentityFile ~/.ssh/aws-key.pem\n  StrictHostKeyChecking no\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Config file directives"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Directive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HostName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual hostname to connect to"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default username"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-standard port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IdentityFile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path to private key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IdentitiesOnly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only use specified identities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProxyJump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect via jump host"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LocalForward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local port forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RemoteForward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote port forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ServerAliveInterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep connection alive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-into-servers",
      children: "SSH into Servers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Basic connection\nssh user@hostname\n\n# Custom port\nssh -p 2222 user@hostname\n\n# Using config alias\nssh ml-server\n\n# With key explicitly\nssh -i ~/.ssh/custom-key user@hostname\n\n# Verbose debugging\nssh -vvv user@hostname\n\n# Run command and exit\nssh user@hostname \"df -h && free -m\"\n\n# Copy public key to server\nssh-copy-id user@hostname\n\n# Force password auth\nssh -o PreferredAuthentications=password user@hostname\n\n# Disable host key checking (insecure, dev only)\nssh -o StrictHostKeyChecking=no user@hostname\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "port-forwarding--tunneling",
      children: "Port Forwarding & Tunneling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSH tunneling creates encrypted tunnels for other protocols."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Local port forwarding"
      }), " — Forward local port to remote:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Access remote service via local port\nssh -L 8888:localhost:8888 user@remote-server\n\n# Access remote database\nssh -L 5432:database.internal:5432 user@bastion\n\n# Multiple forwards\nssh -L 8080:web.internal:80 -L 5432:db.internal:5432 user@bastion\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote port forwarding"
      }), " — Expose local service on remote:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Make local server accessible from remote\nssh -R 9000:localhost:3000 user@public-server\n\n# Expose local dev server to internet via VPS\nssh -R 80:localhost:8080 user@vps\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic port forwarding"
      }), " (SOCKS proxy):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create SOCKS5 proxy on local port 1080\nssh -D 1080 user@remote-server\n\n# Use with browser: set SOCKS proxy to localhost:1080\n# All traffic routes through remote server\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH jump hosts"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Connect through a bastion host\nssh -J user@bastion user@internal-server\n\n# Multiple jumps\nssh -J user@jump1,jump2 user@target\n\n# Using config (ProxyJump)\nssh internal-server  # Uses config setting\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scp--rsync",
      children: "SCP & Rsync"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure copy (scp)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Copy file to remote\nscp file.txt user@remote:/path/\n\n# Copy directory recursively\nscp -r /local/dir user@remote:/remote/path/\n\n# Copy from remote to local\nscp user@remote:/remote/file.txt /local/\n\n# Copy between two remotes\nscp user1@host1:/file user2@host2:/\n\n# Use specific key\nscp -i ~/.ssh/key.pem file.txt user@remote:/\n\n# Preserve permissions and timestamps\nscp -p file.txt user@remote:/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rsync"
      }), " (efficient, delta-transfer):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Basic sync\nrsync -av source/ user@remote:/dest/\n\n# Archive mode (preserve all attributes)\nrsync -az source/ user@remote:/dest/\n\n# Show progress during transfer\nrsync -avh --progress source/ user@remote:/dest/\n\n# Dry run (show what would be transferred)\nrsync -av --dry-run source/ user@remote:/dest/\n\n# Delete files at destination not in source\nrsync -av --delete source/ user@remote:/dest/\n\n# Exclude patterns\nrsync -av --exclude='*.tmp' --exclude='node_modules/' source/ user@remote:/dest/\n\n# Bandwidth limit\nrsync -av --bwlimit=1000 source/ user@remote:/dest/\n\n# Compress during transfer\nrsync -az source/ user@remote:/dest/\n\n# Remote to local\nrsync -av user@remote:/source/ /local/dest/\n\n# Incremental backup with hard links\nrsync -av --link-dest=/backup/yesterday /data/ user@remote:/backup/today/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rsync vs SCP"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rsync"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "scp"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delta transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resume interrupted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compression"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "-z"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "-C"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preserve attributes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "-a"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth throttle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete at dest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-security-hardening",
      children: "SSH Security Hardening"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Server-side configuration (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/ssh/sshd_config"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "# Disable root login\nPermitRootLogin no\n\n# Disable password authentication (keys only)\nPasswordAuthentication no\n\n# Use only Ed25519 or RSA keys\nPubkeyAuthentication yes\nPubkeyAcceptedAlgorithms ssh-ed25519,rsa-sha2-512\n\n# Change default port (security through obscurity)\nPort 2222\n\n# Limit users who can SSH\nAllowUsers alice bob\n\n# Disable agent forwarding globally\nAllowAgentForwarding no\n\n# Disable X11 forwarding if not needed\nX11Forwarding no\n\n# Maximum auth attempts (prevents brute force)\nMaxAuthTries 3\n\n# Client alive interval\nClientAliveInterval 300\nClientAliveCountMax 2\n\n# Use strong ciphers and MACs\nCiphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com\nMACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com\n\n# Log level\nLogLevel VERBOSE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-in-ai-engineering-workflows",
      children: "SSH in AI Engineering Workflows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote ML training"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Tunnel Jupyter notebook from remote\nssh -L 8888:localhost:8888 ml-server\n\n# Tunnel TensorBoard\nssh -L 6006:localhost:6006 ml-server\n\n# Copy datasets with rsync\nrsync -az --progress datasets/ ml-server:/data/datasets/\n\n# Run training script remotely\nssh ml-server \"cd /project && python train.py --config config.yaml\"\n\n# Pull results\nrsync -az ml-server:/project/outputs/ /local/results/\n\n# Multi-GPU cluster access\nssh -J bastion cluster-master\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Container/Kubernetes access"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# SSH into a running container\nkubectl exec -it pod-name -- /bin/bash\n\n# Port-forward a pod\nkubectl port-forward pod-name 8080:80\n\n# SSH tunnel to Kubernetes API\nssh -L 6443:localhost:6443 admin@cluster-master\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-tunneling-for-model-serving",
      children: "SSH Tunneling for Model Serving"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Access ML model API through SSH tunnel\nssh -L 8080:internal-model-server:8080 bastion\n\n# Now access locally: http://localhost:8080/predict\n\n# Secure database tunnel for feature store\nssh -L 5432:feature-store.internal:5432 bastion\n\n# Tunnel with auto-reconnect (autossh)\nautossh -M 0 -o \"ServerAliveInterval 30\" -o \"ServerAliveCountMax 3\" \\\n  -L 8888:localhost:8888 ml-server\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[SSH Client] --> B[TCP Port 22]\n    B --> C{TCP Established?}\n    C -->|Yes| D[Key Exchange]\n    C -->|No| E[Connection Failed]\n    D --> F[Compute Shared Secret]\n    F --> G[Encrypted Channel]\n    G --> H[User Authentication]\n    H --> I{Auth Method}\n    I -->|Password| J[Password Check]\n    I -->|Public Key| K[Sign Challenge]\n    I -->|Keyboard Interactive| L[Multi-Factor]\n    J --> M{Valid?}\n    K --> M\n    L --> M\n    M -->|Yes| N[Session Open]\n    M -->|No| O[Access Denied]\n    N --> P[Shell / Tunnel / SCP / Rsync]\n    P --> Q[Encrypted Data Flow]\n    style A fill:#4a90d9,color:#fff\n    style N fill:#50b86c,color:#fff\n    style Q fill:#f5a623,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-example",
      children: "Real Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of SSH like a secure armored car service. Your laptop is the sender, the server is the recipient. The TCP connection is the road. Key exchange is verifying the driver's identity with a tamper-proof ID. The shared secret is a unique code only the two of you know. The encrypted channel is the armored vehicle — anyone on the road can see the vehicle, but they can't see what's inside. Authentication is showing your ticket before boarding. Port forwarding is like having a secure tunnel from your office directly to a specific room in the remote building."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n\"\"\"SSH automation with paramiko for remote ML workflows\"\"\"\n\nimport paramiko\nimport os\nfrom typing import Optional, List, Tuple\n\nclass SSHManager:\n    \"\"\"Manage SSH connections for remote ML training\"\"\"\n\n    def __init__(self, hostname: str, username: str, key_path: str, port: int = 22):\n        self.hostname = hostname\n        self.username = username\n        self.key_path = key_path\n        self.port = port\n        self.client: Optional[paramiko.SSHClient] = None\n\n    def connect(self) -> None:\n        \"\"\"Establish SSH connection with key-based auth\"\"\"\n        self.client = paramiko.SSHClient()\n        self.client.set_missing_host_key_policy(paramiko.AutoAddPolicy())\n        key = paramiko.Ed25519Key.from_private_key_file(self.key_path)\n        self.client.connect(\n            hostname=self.hostname,\n            port=self.port,\n            username=self.username,\n            pkey=key,\n            timeout=30\n        )\n        print(f\"[+] Connected to {self.username}@{self.hostname}:{self.port}\")\n\n    def execute(self, command: str) -> Tuple[str, str]:\n        \"\"\"Run command on remote server and return stdout, stderr\"\"\"\n        stdin, stdout, stderr = self.client.exec_command(command, timeout=300)\n        exit_code = stdout.channel.recv_exit_status()\n        out = stdout.read().decode().strip()\n        err = stderr.read().decode().strip()\n        if exit_code != 0:\n            print(f\"[-] Exit code {exit_code}: {err}\")\n        return out, err\n\n    def transfer_file(self, local_path: str, remote_path: str, direction: str = \"upload\") -> None:\n        \"\"\"Transfer files using SFTP\"\"\"\n        sftp = self.client.open_sftp()\n        try:\n            if direction == \"upload\":\n                sftp.put(local_path, remote_path)\n                print(f\"[+] Uploaded {local_path} -> {remote_path}\")\n            else:\n                sftp.get(remote_path, local_path)\n                print(f\"[+] Downloaded {remote_path} -> {local_path}\")\n        finally:\n            sftp.close()\n\n    def create_tunnel(self, local_port: int, remote_host: str, remote_port: int) -> None:\n        \"\"\"Create local port forwarding tunnel\"\"\"\n        transport = self.client.get_transport()\n        transport.request_port_forward(\"\", local_port)\n        channel = transport.open_channel(\n            \"direct-tcpip\",\n            (remote_host, remote_port),\n            (\"localhost\", local_port)\n        )\n        print(f\"[+] Tunnel: localhost:{local_port} -> {remote_host}:{remote_port}\")\n\n    def close(self) -> None:\n        if self.client:\n            self.client.close()\n            print(\"[+] Connection closed\")\n\nif __name__ == \"__main__\":\n    ssh = SSHManager(\n        hostname=\"ec2-54-123-45-67.compute-1.amazonaws.com\",\n        username=\"ubuntu\",\n        key_path=os.path.expanduser(\"~/.ssh/ml-key.pem\")\n    )\n    ssh.connect()\n\n    # Check GPU status\n    out, _ = ssh.execute(\"nvidia-smi --query-gpu=name,memory.used --format=csv\")\n    print(f\"GPU Info:\\n{out}\")\n\n    # Check disk space\n    out, _ = ssh.execute(\"df -h /data\")\n    print(f\"Disk:\\n{out}\")\n\n    # Upload training script\n    ssh.transfer_file(\"train.py\", \"/home/ubuntu/project/train.py\")\n\n    # Start training\n    out, _ = ssh.execute(\"cd /home/ubuntu/project && python train.py --epochs 10 2>&1 | tail -5\")\n    print(f\"Training output:\\n{out}\")\n\n    ssh.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "[+] Connected to ubuntu@ec2-54-123-45-67.compute-1.amazonaws.com:22\nGPU Info:\nname, memory.used [MiB]\nTesla T4, 512 MiB\nDisk:\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/nvme0n1p1  200G   45G  155G  23% /data\n[+] Uploaded train.py -> /home/ubuntu/project/train.py\nTraining output:\nEpoch 10/10, Loss: 0.0234, Acc: 0.9812\n[+] Connection closed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSH (Secure Shell) is the standard protocol for encrypted remote access to servers, containers, and cloud instances, operating over TCP port 22. It is built on three protocol layers: a transport layer that verifies the server's host key and performs Diffie-Hellman key exchange for symmetric encryption, a user authentication layer that validates the client with public keys or passwords, and a connection layer that multiplexes channels for shell, exec, tunnels, and file transfer. Ed25519 is the recommended key type for speed and security, with RSA 4096 reserved for legacy systems. AI engineers use SSH daily to access GPU training machines, tunnel Jupyter notebooks and TensorBoard, and move datasets with scp or rsync. Port forwarding (-L, -R, -D) exposes private services over encrypted channels, while ProxyJump and bastion hosts provide secure entry to internal networks. The trade-off is operational: SSH is only secure when host keys are verified, password authentication is disabled, and agent forwarding is limited to trusted servers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSH uses TCP port 22 with three layers: transport, user authentication, and connection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ed25519 is the recommended key type; RSA 4096 is the fallback for legacy systems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ssh-agent caches decrypted private keys in memory so passphrases are not re-entered."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local (-L), remote (-R), and dynamic SOCKS (-D) forwarding create encrypted tunnels."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rsync beats scp for large transfers with delta-transfer, resume, and --delete mirroring."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server hardening: disable password auth and root login, limit MaxAuthTries, use AllowUsers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host key verification"
        }), ": Always verify the host key fingerprint on first connection and keep StrictHostKeyChecking enabled to prevent man-in-the-middle attacks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key generation"
        }), ": Generate Ed25519 keys with ssh-keygen -t ed25519 -C \"", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:user@example.com",
          children: "user@example.com"
        }), "\"; use RSA 4096 only where Ed25519 is unsupported."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent forwarding"
        }), ": Never use ssh -A on untrusted intermediate servers, because root there can reuse your agent to authenticate elsewhere; prefer ProxyJump."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port forwarding"
        }), ": Use ssh -L 8888:localhost:8888 ml-server to tunnel a remote Jupyter notebook, -R to expose local services, and -D 1080 for a SOCKS5 proxy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "rsync over scp"
        }), ": Use rsync -az --progress for datasets; the delta algorithm transfers only changed blocks and --link-dest enables incremental backups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server hardening"
        }), ": Set PermitRootLogin no, PasswordAuthentication no, and MaxAuthTries 3 in /etc/ssh/sshd_config for production."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automation"
        }), ": Use autossh -M 0 with ServerAliveInterval for self-healing production tunnels to model APIs or databases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: How does the SSH key exchange work and what makes it secure?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "SSH key exchange uses Diffie-Hellman (DH) or ECDH to establish a shared secret over an insecure channel. The server sends its host key. Both parties generate ephemeral key pairs and exchange public values. Each computes the shared secret using their private key and the other's public value. The shared secret is then hashed with the session ID to derive symmetric encryption keys. This provides perfect forward secrecy — even if the server's long-term host key is compromised, past session keys remain secure because ephemeral keys are never stored."
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
      "data-qid": "git07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Why is Ed25519 recommended over RSA for SSH keys?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ed25519 offers multiple advantages: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Speed"
          }), " — signing and verification are ~10x faster than RSA 4096. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Size"
          }), " — 256-bit keys vs 4096-bit RSA, smaller public keys transfer faster. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Security"
          }), " — provides 128-bit security level (equivalent to RSA 3072+). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Deterministic"
          }), " — no random number generator needed for signing, avoiding RNG vulnerabilities. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) Side-channel resistance"
          }), " — constant-time execution prevents timing attacks. The only downside is compatibility: older systems (pre-2014) may not support Ed25519, in which case RSA 4096 is the fallback."]
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
      "data-qid": "git07-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is SSH agent forwarding and when should you use it?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SSH agent forwarding allows your local ssh-agent to be used on a remote server. When you ssh from the remote server to another machine, the intermediate server forwards the authentication challenge back to your local agent. Use cases: deploying code from a remote server to GitHub, accessing a database through a bastion, multi-hop SSH into internal networks. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Security risk"
          }), ": root on the intermediate server can use your agent to authenticate to other servers. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProxyJump"
          }), " instead when possible, or limit forwarding with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ssh -A"
          }), " only for trusted servers."]
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
      "data-qid": "git07-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Explain local, remote, and dynamic port forwarding in SSH.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Local forwarding (-L)"
          }), ": Listens on a local port and forwards connections through SSH to a destination. Example: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ssh -L 8888:internal-server:8888 bastion"
          }), " makes internal-server:8888 accessible at localhost:8888. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Remote forwarding (-R)"
          }), ": Listens on a remote port and forwards connections back to a local service. Example: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ssh -R 9000:localhost:3000 public-server"
          }), " makes local port 3000 accessible at public-server:9000. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic forwarding (-D)"
          }), ": Creates a SOCKS5 proxy on the local machine. All traffic routed through this proxy tunnels through SSH to the remote server, which then forwards to the actual destination."]
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
      "data-qid": "git07-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does rsync delta-transfer algorithm work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The rsync algorithm splits the source file into fixed-size blocks (typically 512-4096 bytes). For each block, it computes two checksums: a weak rolling checksum (Adler-32) for quick comparison, and a strong MD5 hash for verification. The receiver computes checksums for its version and sends them to the sender. The sender compares checksums to identify which blocks differ. Only the differing blocks and a reconstruction map are transferred. The receiver reconstructs the file using existing blocks plus new blocks. This makes rsync extremely efficient for incremental transfers, backups, and syncing large datasets."
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
      "data-qid": "git07-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How would you secure an SSH server against brute-force attacks?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Disable password authentication"
          }), " — use key-based auth only (", (0,jsx_runtime.jsx)(_components.code, {
            children: "PasswordAuthentication no"
          }), "). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Change port"
          }), " — move from default port 22 (", (0,jsx_runtime.jsx)(_components.code, {
            children: "Port 2222"
          }), "). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Fail2ban"
          }), " — configure to ban IPs after N failed attempts. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) AllowUsers"
          }), " — restrict which users can SSH. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) MaxAuthTries"
          }), " — limit to 3 attempts per connection. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Rate limiting"
          }), " — use iptables/nftables to limit connection rate per IP. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "7) Two-factor auth"
          }), " — add Google Authenticator or U2F. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "8) IP whitelisting"
          }), " — allow only known IP ranges. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "9) Use a bastion host"
          }), " — single entry point with audit logging. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "10) Monitor logs"
          }), " — review ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/var/log/auth.log"
          }), " for suspicious activity."]
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
      "data-qid": "git07-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What happens during SSH host key verification?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On first connection, the client receives the server's host key and displays its fingerprint. The user must verify this fingerprint out-of-band (e.g., from cloud console or IT admin). The client stores the host key in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "~/.ssh/known_hosts"
          }), ". On subsequent connections, the client compares the received host key with the stored one. If they match, the connection proceeds. If the host key has changed, SSH warns about a possible man-in-the-middle attack and refuses to connect. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "StrictHostKeyChecking yes"
          }), " enforces this check; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "accept-new"
          }), " auto-accepts new hosts; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "no"
          }), " disables checking (insecure)."]
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
      "data-qid": "git07-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: How do you use SSH for secure file transfer in automated pipelines?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For CI/CD pipelines, use SSH keys with passphrase-less (or ssh-agent in CI) for automation. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Deploy keys"
          }), " — add a dedicated deploy key with read-only access to the repository. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) SSH config"
          }), " — configure host aliases for different environments. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) rsync over SSH"
          }), " — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rsync -az --delete -e \"ssh -i key\" source/ user@host:/dest/"
          }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) SCP"
          }), " — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "scp -i key artifact.tar.gz user@host:/deploy/"
          }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5) SSH in scripts"
          }), " — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ssh user@host \"systemctl restart my-service\""
          }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6) Security"
          }), " — use dedicated service accounts, rotate keys regularly, restrict source IPs in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "~/.ssh/authorized_keys"
          }), " via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "from=\"IP\""
          }), " prefix."]
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
      "data-qid": "git07-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: What is a bastion host and how does it relate to SSH?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A bastion host (or jump box) is a hardened server that acts as the single entry point to a private network. All SSH access to internal servers routes through the bastion. Benefits: ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1) Reduced attack surface"
          }), " — only one server exposes SSH to the internet. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2) Audit trail"
          }), " — all access logged on the bastion. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3) Access control"
          }), " — IAM integration, MFA on bastion only. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4) Simpler firewall rules"
          }), " — allow SSH from bastion to internal, not from internet. Connect via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ssh -J user@bastion user@internal"
          }), " or using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProxyJump"
          }), " in SSH config. AWS Systems Manager Session Manager is a modern alternative that eliminates bastion hosts entirely."]
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
      "data-qid": "git07-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How does autossh keep SSH tunnels alive?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["autossh is a wrapper that monitors an SSH connection and restarts it if it drops. It uses a monitoring port (or echo service) to detect connection liveness. If the monitor detects that the SSH process has died or the connection is broken, autossh kills the old process and spawns a new SSH connection. Usage: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "autossh -M 0 -o \"ServerAliveInterval 30\" -L 8888:localhost:8888 user@remote"
          }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-M 0"
          }), " flag disables the built-in monitor port (using SSH's own ServerAlive instead). This is essential for production tunnels used for database access, model serving, or monitoring dashboards that must stay up despite network interruptions."]
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
      }), ": Which key type is recommended for SSH due to speed and security?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) DSA\nb) RSA 2048\nc) Ed25519\nd) ECDSA 521"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git07-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Ed25519"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Ed25519 is faster, smaller, and more secure than RSA. It provides 128-bit security with 256-bit keys."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh -L 8888:localhost:8888 user@host"
      }), " do?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Forwards remote port 8888 to local port 8888\nb) Forwards local port 8888 to remote port 8888\nc) Creates a SOCKS proxy on port 8888\nd) Connects to SSH on port 8888"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git07-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Forwards local port 8888 to remote port 8888"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "-L"
          }), " is local forwarding. Connections to localhost:8888 are tunneled to remote localhost:8888."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which command copies your public key to a remote server?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) ssh-keygen -R\nb) ssh-add\nc) ssh-copy-id\nd) scp-key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git07-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) ssh-copy-id"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "ssh-copy-id user@host"
          }), " appends your public key to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "~/.ssh/authorized_keys"
          }), " on the remote server."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What SSH config option specifies a bastion host to connect through?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) ProxyCommand\nb) ProxyJump\nc) ForwardAgent\nd) LocalForward"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git07-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) ProxyJump"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "ProxyJump user@bastion"
          }), " routes the SSH connection through the bastion host to the target."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does the rsync ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--delete"
      }), " flag do?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Deletes source files after transfer\nb) Removes files at destination not present in source\nc) Deletes empty directories\nd) Removes temporary files"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "git07-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) Removes files at destination not present in source"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "--delete"
          }), " makes destination an exact mirror of source by deleting extraneous files at the destination."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Generate an Ed25519 key pair, add it to ssh-agent, and copy it to a remote server. Verify you can SSH without a password."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create an SSH config file with entries for GitHub and an EC2 instance. Test connecting using the aliases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Set up local port forwarding to access a remote Jupyter notebook running on port 8888. Verify you can open the notebook in your local browser."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Use rsync to back up a local directory to a remote server with compression, progress display, and exclusion of temporary files."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Set up a bastion host pattern: create an SSH config that connects to an internal server through a jump host, with port forwarding for a database and a web service."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Write a Python script using paramiko that connects to a remote server, checks GPU status, uploads a training script, runs it, and downloads the results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using password authentication instead of key-based auth on production servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding private keys to repositories or sharing them across teams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disabling StrictHostKeyChecking in production (exposes to MITM attacks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using agent forwarding on untrusted intermediate servers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to restrict SSH access with AllowUsers and IP whitelisting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ed25519 keys are recommended: 256-bit, fast, secure; RSA 4096 for legacy compatibility"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ssh-agent caches decrypted keys; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-t"
        }), " for timeout-limited agent sessions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SSH config file at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.ssh/config"
        }), " simplifies connections with Host aliases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Local forwarding (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-L"
        }), "): access remote services on local ports"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remote forwarding (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-R"
        }), "): expose local services on remote ports"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dynamic forwarding (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-D"
        }), "): SOCKS5 proxy through SSH"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ProxyJump (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-J"
        }), "): connect through bastion hosts"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rsync beats scp for large transfers: delta algorithm, resume, compression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server hardening: disable passwords, change port, use Fail2ban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always verify host key fingerprints on first connection"
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
            children: "Explain the core idea of SSH & Remote Access — Secure Shell, Key Management, Tunneling in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates SSH & Remote Access — Secure Shell, Key Management, Tunneling."
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
            children: "Describe a production bug caused by misunderstanding SSH & Remote Access — Secure Shell, Key Management, Tunneling. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on SSH & Remote Access — Secure Shell, Key Management, Tunneling from 10 users to 10 million?"
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
            children: "Compare SSH & Remote Access — Secure Shell, Key Management, Tunneling with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on SSH & Remote Access — Secure Shell, Key Management, Tunneling."
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
            children: "How does SSH & Remote Access — Secure Shell, Key Management, Tunneling behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of SSH & Remote Access — Secure Shell, Key Management, Tunneling run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of SSH & Remote Access — Secure Shell, Key Management, Tunneling that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name SSH & Remote Access — Secure Shell, Key Management, Tunneling explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using SSH & Remote Access — Secure Shell, Key Management, Tunneling\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies SSH & Remote Access — Secure Shell, Key Management, Tunneling to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside SSH & Remote Access — Secure Shell, Key Management, Tunneling (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of SSH & Remote Access — Secure Shell, Key Management, Tunneling and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a SSH & Remote Access — Secure Shell, Key Management, Tunneling-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic SSH & Remote Access — Secure Shell, Key Management, Tunneling interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply SSH & Remote Access — Secure Shell, Key Management, Tunneling in production today?"
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
        }), " SSH & Remote Access — Secure Shell, Key Management, Tunneling builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for SSH & Remote Access — Secure Shell, Key Management, Tunneling before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for SSH & Remote Access — Secure Shell, Key Management, Tunneling is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for SSH & Remote Access — Secure Shell, Key Management, Tunneling in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the SSH & Remote Access — Secure Shell, Key Management, Tunneling chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers SSH & Remote Access — Secure Shell, Key Management, Tunneling is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to SSH & Remote Access — Secure Shell, Key Management, Tunneling is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing SSH & Remote Access — Secure Shell, Key Management, Tunneling is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug SSH & Remote Access — Secure Shell, Key Management, Tunneling issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to SSH & Remote Access — Secure Shell, Key Management, Tunneling in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving SSH & Remote Access — Secure Shell, Key Management, Tunneling that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of SSH & Remote Access — Secure Shell, Key Management, Tunneling is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain SSH & Remote Access — Secure Shell, Key Management, Tunneling in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for SSH & Remote Access — Secure Shell, Key Management, Tunneling and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of SSH & Remote Access — Secure Shell, Key Management, Tunneling on an empty input?"
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
            children: "Complete Medium exercises, explain SSH & Remote Access — Secure Shell, Key Management, Tunneling to someone else"
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
        children: "Always write a one-line example of SSH & Remote Access — Secure Shell, Key Management, Tunneling from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered SSH & Remote Access — Secure Shell, Key Management, Tunneling when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining SSH & Remote Access — Secure Shell, Key Management, Tunneling twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own SSH & Remote Access — Secure Shell, Key Management, Tunneling snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of SSH & Remote Access — Secure Shell, Key Management, Tunneling listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link SSH & Remote Access — Secure Shell, Key Management, Tunneling to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of SSH & Remote Access — Secure Shell, Key Management, Tunneling by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain SSH & Remote Access — Secure Shell, Key Management, Tunneling to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of SSH & Remote Access — Secure Shell, Key Management, Tunneling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on SSH & Remote Access — Secure Shell, Key Management, Tunneling (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real SSH & Remote Access — Secure Shell, Key Management, Tunneling problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements SSH & Remote Access — Secure Shell, Key Management, Tunneling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for SSH & Remote Access — Secure Shell, Key Management, Tunneling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on SSH & Remote Access — Secure Shell, Key Management, Tunneling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how SSH & Remote Access — Secure Shell, Key Management, Tunneling fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how SSH & Remote Access — Secure Shell, Key Management, Tunneling is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where SSH & Remote Access — Secure Shell, Key Management, Tunneling is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of SSH & Remote Access — Secure Shell, Key Management, Tunneling, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is SSH & Remote Access — Secure Shell, Key Management, Tunneling asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSH & Remote Access — Secure Shell, Key Management, Tunneling is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with SSH & Remote Access — Secure Shell, Key Management, Tunneling."
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
        children: "SSH & Remote Access — Secure Shell, Key Management, Tunneling emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for SSH & Remote Access — Secure Shell, Key Management, Tunneling today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about SSH & Remote Access — Secure Shell, Key Management, Tunneling — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around SSH & Remote Access — Secure Shell, Key Management, Tunneling changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing SSH & Remote Access — Secure Shell, Key Management, Tunneling."
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
        children: "SSH & Remote Access — Secure Shell, Key Management, Tunneling appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding SSH & Remote Access — Secure Shell, Key Management, Tunneling helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the SSH & Remote Access — Secure Shell, Key Management, Tunneling concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, SSH & Remote Access — Secure Shell, Key Management, Tunneling skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply SSH & Remote Access — Secure Shell, Key Management, Tunneling to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSH & Remote Access — Secure Shell, Key Management, Tunneling is like a recipe"
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
        }), " — this chapter contributes the SSH & Remote Access — Secure Shell, Key Management, Tunneling skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-07sshandremoteaccess-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which key type is recommended for SSH due to speed and security?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Ed25519"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-07sshandremoteaccess-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does ssh -L 8888:localhost:8888 user@host do?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Forwards local port 8888 to remote port 8888"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-07sshandremoteaccess-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which command copies your public key to a remote server?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) ssh-copy-id"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-07sshandremoteaccess-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What SSH config option specifies a bastion host to connect through?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) ProxyJump"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "04gitlinuxcli-07sshandremoteaccess-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does the rsync --delete flag do?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) Removes files at destination not present in source"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for SSH & Remote Access — Secure Shell, Key Management, Tunneling (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing SSH & Remote Access — Secure Shell, Key Management, Tunneling (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for SSH & Remote Access — Secure Shell, Key Management, Tunneling-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running SSH & Remote Access — Secure Shell, Key Management, Tunneling in production at scale"
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
        children: "Testing: pytest for unit tests of SSH & Remote Access — Secure Shell, Key Management, Tunneling code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on SSH & Remote Access — Secure Shell, Key Management, Tunneling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in SSH & Remote Access — Secure Shell, Key Management, Tunneling code."]
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
        }), " or your IDE's debugger to step through the SSH & Remote Access — Secure Shell, Key Management, Tunneling example code."]
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
        children: "Explain SSH & Remote Access — Secure Shell, Key Management, Tunneling in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of SSH & Remote Access — Secure Shell, Key Management, Tunneling."
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
        children: "Tell me about a time you debugged a SSH & Remote Access — Secure Shell, Key Management, Tunneling problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where SSH & Remote Access — Secure Shell, Key Management, Tunneling is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for SSH & Remote Access — Secure Shell, Key Management, Tunneling."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core SSH & Remote Access — Secure Shell, Key Management, Tunneling logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain SSH & Remote Access — Secure Shell, Key Management, Tunneling without notes"
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
        }), ": a small team uses SSH & Remote Access — Secure Shell, Key Management, Tunneling daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": SSH & Remote Access — Secure Shell, Key Management, Tunneling patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": SSH & Remote Access — Secure Shell, Key Management, Tunneling principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": SSH & Remote Access — Secure Shell, Key Management, Tunneling shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect SSH & Remote Access — Secure Shell, Key Management, Tunneling to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/08-process-management",
        children: "Process Management — Monitoring, Signals, Resource Control"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSH & Remote Access — Secure Shell, Key Management, Tunneling, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of SSH & Remote Access — Secure Shell, Key Management, Tunneling depends on input size and distribution — always benchmark for your own data."
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