"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8976],{

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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\r\n    participant C as SSH Client\r\n    participant S as SSH Server\r\n    C->>S: TCP Connection (port 22)\r\n    S->>C: Server Host Key + Protocol Version\r\n    C->>C: Verify Host Key Fingerprint\r\n    C->>S: Diffie-Hellman Key Exchange Init\r\n    S->>C: DH Reply + Server Public Key\r\n    C->>C: Compute Shared Secret\r\n    C->>S: Encrypted Session Established\r\n    C->>S: Authentication Request (Public Key)\r\n    S->>C: Challenge: Sign Random Data\r\n    C->>C: Sign with Private Key\r\n    C->>S: Signed Response\r\n    S->>C: Authentication Success\r\n    C->>S: Open Shell/Exec Channel\r\n    S->>C: Channel Opened\r\n    Note over C,S: Encrypted Data Flow"
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
        children: "# Generate Ed25519 key (recommended)\r\nssh-keygen -t ed25519 -C \"user@example.com\"\r\n\r\n# Generate RSA key (for legacy systems)\r\nssh-keygen -t rsa -b 4096 -C \"user@example.com\"\r\n\r\n# Specify custom file location\r\nssh-keygen -t ed25519 -f ~/.ssh/github-key -C \"github@example.com\"\r\n\r\n# View key fingerprint\r\nssh-keygen -lf ~/.ssh/id_ed25519\r\n\r\n# View key in visual (ASCII art) format\r\nssh-keygen -lvf ~/.ssh/id_ed25519\n"
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
        children: "# Start ssh-agent in background\r\neval \"$(ssh-agent -s)\"\r\n\r\n# Add default key\r\nssh-add ~/.ssh/id_ed25519\r\n\r\n# Add key with timeout (1 hour)\r\nssh-add -t 3600 ~/.ssh/id_ed25519\r\n\r\n# List loaded keys\r\nssh-add -l\r\n\r\n# List with fingerprints\r\nssh-add -L\r\n\r\n# Remove all keys\r\nssh-add -D\r\n\r\n# Automatic agent on macOS (keychain)\r\nssh-add --apple-use-keychain ~/.ssh/id_ed25519\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent forwarding"
      }), " forwards your local agent to remote servers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enable agent forwarding\r\nssh -A user@remote-server\r\n\r\n# In SSH config\r\nHost *\r\n  ForwardAgent yes\n"
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
        children: "# Default settings for all hosts\r\nHost *\r\n  AddKeysToAgent yes\r\n  UseKeychain yes\r\n  ServerAliveInterval 60\r\n  ServerAliveCountMax 3\r\n  Compression yes\r\n  LogLevel INFO\r\n\r\n# GitHub\r\nHost github.com\r\n  HostName github.com\r\n  User git\r\n  IdentityFile ~/.ssh/github-key\r\n  IdentitiesOnly yes\r\n\r\n# EC2 instance with short alias\r\nHost ml-server\r\n  HostName ec2-54-123-45-67.compute-1.amazonaws.com\r\n  User ubuntu\r\n  Port 22\r\n  IdentityFile ~/.ssh/ml-key.pem\r\n  ForwardAgent no\r\n  LocalForward 8888 localhost:8888\r\n\r\n# Jump host pattern\r\nHost jump-server\r\n  HostName jump.example.com\r\n  User admin\r\n  IdentityFile ~/.ssh/jump-key\r\n\r\nHost internal-*\r\n  User appuser\r\n  IdentityFile ~/.ssh/internal-key\r\n  ProxyJump jump-server\r\n  ForwardAgent no\r\n\r\n# Bastion host direct connection\r\nHost bastion\r\n  HostName bastion.example.com\r\n  User admin\r\n  IdentityFile ~/.ssh/bastion-key\r\n  LocalForward 5432 database.internal:5432\r\n\r\n# Match patterns\r\nHost *.compute.amazonaws.com\r\n  User ec2-user\r\n  IdentityFile ~/.ssh/aws-key.pem\r\n  StrictHostKeyChecking no\n"
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
        children: "# Basic connection\r\nssh user@hostname\r\n\r\n# Custom port\r\nssh -p 2222 user@hostname\r\n\r\n# Using config alias\r\nssh ml-server\r\n\r\n# With key explicitly\r\nssh -i ~/.ssh/custom-key user@hostname\r\n\r\n# Verbose debugging\r\nssh -vvv user@hostname\r\n\r\n# Run command and exit\r\nssh user@hostname \"df -h && free -m\"\r\n\r\n# Copy public key to server\r\nssh-copy-id user@hostname\r\n\r\n# Force password auth\r\nssh -o PreferredAuthentications=password user@hostname\r\n\r\n# Disable host key checking (insecure, dev only)\r\nssh -o StrictHostKeyChecking=no user@hostname\n"
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
        children: "# Access remote service via local port\r\nssh -L 8888:localhost:8888 user@remote-server\r\n\r\n# Access remote database\r\nssh -L 5432:database.internal:5432 user@bastion\r\n\r\n# Multiple forwards\r\nssh -L 8080:web.internal:80 -L 5432:db.internal:5432 user@bastion\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote port forwarding"
      }), " — Expose local service on remote:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Make local server accessible from remote\r\nssh -R 9000:localhost:3000 user@public-server\r\n\r\n# Expose local dev server to internet via VPS\r\nssh -R 80:localhost:8080 user@vps\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic port forwarding"
      }), " (SOCKS proxy):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create SOCKS5 proxy on local port 1080\r\nssh -D 1080 user@remote-server\r\n\r\n# Use with browser: set SOCKS proxy to localhost:1080\r\n# All traffic routes through remote server\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH jump hosts"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Connect through a bastion host\r\nssh -J user@bastion user@internal-server\r\n\r\n# Multiple jumps\r\nssh -J user@jump1,jump2 user@target\r\n\r\n# Using config (ProxyJump)\r\nssh internal-server  # Uses config setting\n"
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
        children: "# Copy file to remote\r\nscp file.txt user@remote:/path/\r\n\r\n# Copy directory recursively\r\nscp -r /local/dir user@remote:/remote/path/\r\n\r\n# Copy from remote to local\r\nscp user@remote:/remote/file.txt /local/\r\n\r\n# Copy between two remotes\r\nscp user1@host1:/file user2@host2:/\r\n\r\n# Use specific key\r\nscp -i ~/.ssh/key.pem file.txt user@remote:/\r\n\r\n# Preserve permissions and timestamps\r\nscp -p file.txt user@remote:/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rsync"
      }), " (efficient, delta-transfer):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Basic sync\r\nrsync -av source/ user@remote:/dest/\r\n\r\n# Archive mode (preserve all attributes)\r\nrsync -az source/ user@remote:/dest/\r\n\r\n# Show progress during transfer\r\nrsync -avh --progress source/ user@remote:/dest/\r\n\r\n# Dry run (show what would be transferred)\r\nrsync -av --dry-run source/ user@remote:/dest/\r\n\r\n# Delete files at destination not in source\r\nrsync -av --delete source/ user@remote:/dest/\r\n\r\n# Exclude patterns\r\nrsync -av --exclude='*.tmp' --exclude='node_modules/' source/ user@remote:/dest/\r\n\r\n# Bandwidth limit\r\nrsync -av --bwlimit=1000 source/ user@remote:/dest/\r\n\r\n# Compress during transfer\r\nrsync -az source/ user@remote:/dest/\r\n\r\n# Remote to local\r\nrsync -av user@remote:/source/ /local/dest/\r\n\r\n# Incremental backup with hard links\r\nrsync -av --link-dest=/backup/yesterday /data/ user@remote:/backup/today/\n"
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
        children: "# Disable root login\r\nPermitRootLogin no\r\n\r\n# Disable password authentication (keys only)\r\nPasswordAuthentication no\r\n\r\n# Use only Ed25519 or RSA keys\r\nPubkeyAuthentication yes\r\nPubkeyAcceptedAlgorithms ssh-ed25519,rsa-sha2-512\r\n\r\n# Change default port (security through obscurity)\r\nPort 2222\r\n\r\n# Limit users who can SSH\r\nAllowUsers alice bob\r\n\r\n# Disable agent forwarding globally\r\nAllowAgentForwarding no\r\n\r\n# Disable X11 forwarding if not needed\r\nX11Forwarding no\r\n\r\n# Maximum auth attempts (prevents brute force)\r\nMaxAuthTries 3\r\n\r\n# Client alive interval\r\nClientAliveInterval 300\r\nClientAliveCountMax 2\r\n\r\n# Use strong ciphers and MACs\r\nCiphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com\r\nMACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com\r\n\r\n# Log level\r\nLogLevel VERBOSE\n"
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
        children: "# Tunnel Jupyter notebook from remote\r\nssh -L 8888:localhost:8888 ml-server\r\n\r\n# Tunnel TensorBoard\r\nssh -L 6006:localhost:6006 ml-server\r\n\r\n# Copy datasets with rsync\r\nrsync -az --progress datasets/ ml-server:/data/datasets/\r\n\r\n# Run training script remotely\r\nssh ml-server \"cd /project && python train.py --config config.yaml\"\r\n\r\n# Pull results\r\nrsync -az ml-server:/project/outputs/ /local/results/\r\n\r\n# Multi-GPU cluster access\r\nssh -J bastion cluster-master\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Container/Kubernetes access"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# SSH into a running container\r\nkubectl exec -it pod-name -- /bin/bash\r\n\r\n# Port-forward a pod\r\nkubectl port-forward pod-name 8080:80\r\n\r\n# SSH tunnel to Kubernetes API\r\nssh -L 6443:localhost:6443 admin@cluster-master\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssh-tunneling-for-model-serving",
      children: "SSH Tunneling for Model Serving"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Access ML model API through SSH tunnel\r\nssh -L 8080:internal-model-server:8080 bastion\r\n\r\n# Now access locally: http://localhost:8080/predict\r\n\r\n# Secure database tunnel for feature store\r\nssh -L 5432:feature-store.internal:5432 bastion\r\n\r\n# Tunnel with auto-reconnect (autossh)\r\nautossh -M 0 -o \"ServerAliveInterval 30\" -o \"ServerAliveCountMax 3\" \\\r\n  -L 8888:localhost:8888 ml-server\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-explanation",
      children: "Visual Explanation"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[SSH Client] --> B[TCP Port 22]\r\n    B --> C{TCP Established?}\r\n    C -->|Yes| D[Key Exchange]\r\n    C -->|No| E[Connection Failed]\r\n    D --> F[Compute Shared Secret]\r\n    F --> G[Encrypted Channel]\r\n    G --> H[User Authentication]\r\n    H --> I{Auth Method}\r\n    I -->|Password| J[Password Check]\r\n    I -->|Public Key| K[Sign Challenge]\r\n    I -->|Keyboard Interactive| L[Multi-Factor]\r\n    J --> M{Valid?}\r\n    K --> M\r\n    L --> M\r\n    M -->|Yes| N[Session Open]\r\n    M -->|No| O[Access Denied]\r\n    N --> P[Shell / Tunnel / SCP / Rsync]\r\n    P --> Q[Encrypted Data Flow]\r\n    style A fill:#4a90d9,color:#fff\r\n    style N fill:#50b86c,color:#fff\r\n    style Q fill:#f5a623,color:#fff"
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
        children: "#!/usr/bin/env python3\r\n\"\"\"SSH automation with paramiko for remote ML workflows\"\"\"\r\n\r\nimport paramiko\r\nimport os\r\nfrom typing import Optional, List, Tuple\r\n\r\nclass SSHManager:\r\n    \"\"\"Manage SSH connections for remote ML training\"\"\"\r\n\r\n    def __init__(self, hostname: str, username: str, key_path: str, port: int = 22):\r\n        self.hostname = hostname\r\n        self.username = username\r\n        self.key_path = key_path\r\n        self.port = port\r\n        self.client: Optional[paramiko.SSHClient] = None\r\n\r\n    def connect(self) -> None:\r\n        \"\"\"Establish SSH connection with key-based auth\"\"\"\r\n        self.client = paramiko.SSHClient()\r\n        self.client.set_missing_host_key_policy(paramiko.AutoAddPolicy())\r\n        key = paramiko.Ed25519Key.from_private_key_file(self.key_path)\r\n        self.client.connect(\r\n            hostname=self.hostname,\r\n            port=self.port,\r\n            username=self.username,\r\n            pkey=key,\r\n            timeout=30\r\n        )\r\n        print(f\"[+] Connected to {self.username}@{self.hostname}:{self.port}\")\r\n\r\n    def execute(self, command: str) -> Tuple[str, str]:\r\n        \"\"\"Run command on remote server and return stdout, stderr\"\"\"\r\n        stdin, stdout, stderr = self.client.exec_command(command, timeout=300)\r\n        exit_code = stdout.channel.recv_exit_status()\r\n        out = stdout.read().decode().strip()\r\n        err = stderr.read().decode().strip()\r\n        if exit_code != 0:\r\n            print(f\"[-] Exit code {exit_code}: {err}\")\r\n        return out, err\r\n\r\n    def transfer_file(self, local_path: str, remote_path: str, direction: str = \"upload\") -> None:\r\n        \"\"\"Transfer files using SFTP\"\"\"\r\n        sftp = self.client.open_sftp()\r\n        try:\r\n            if direction == \"upload\":\r\n                sftp.put(local_path, remote_path)\r\n                print(f\"[+] Uploaded {local_path} -> {remote_path}\")\r\n            else:\r\n                sftp.get(remote_path, local_path)\r\n                print(f\"[+] Downloaded {remote_path} -> {local_path}\")\r\n        finally:\r\n            sftp.close()\r\n\r\n    def create_tunnel(self, local_port: int, remote_host: str, remote_port: int) -> None:\r\n        \"\"\"Create local port forwarding tunnel\"\"\"\r\n        transport = self.client.get_transport()\r\n        transport.request_port_forward(\"\", local_port)\r\n        channel = transport.open_channel(\r\n            \"direct-tcpip\",\r\n            (remote_host, remote_port),\r\n            (\"localhost\", local_port)\r\n        )\r\n        print(f\"[+] Tunnel: localhost:{local_port} -> {remote_host}:{remote_port}\")\r\n\r\n    def close(self) -> None:\r\n        if self.client:\r\n            self.client.close()\r\n            print(\"[+] Connection closed\")\r\n\r\nif __name__ == \"__main__\":\r\n    ssh = SSHManager(\r\n        hostname=\"ec2-54-123-45-67.compute-1.amazonaws.com\",\r\n        username=\"ubuntu\",\r\n        key_path=os.path.expanduser(\"~/.ssh/ml-key.pem\")\r\n    )\r\n    ssh.connect()\r\n\r\n    # Check GPU status\r\n    out, _ = ssh.execute(\"nvidia-smi --query-gpu=name,memory.used --format=csv\")\r\n    print(f\"GPU Info:\\n{out}\")\r\n\r\n    # Check disk space\r\n    out, _ = ssh.execute(\"df -h /data\")\r\n    print(f\"Disk:\\n{out}\")\r\n\r\n    # Upload training script\r\n    ssh.transfer_file(\"train.py\", \"/home/ubuntu/project/train.py\")\r\n\r\n    # Start training\r\n    out, _ = ssh.execute(\"cd /home/ubuntu/project && python train.py --epochs 10 2>&1 | tail -5\")\r\n    print(f\"Training output:\\n{out}\")\r\n\r\n    ssh.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "[+] Connected to ubuntu@ec2-54-123-45-67.compute-1.amazonaws.com:22\r\nGPU Info:\r\nname, memory.used [MiB]\r\nTesla T4, 512 MiB\r\nDisk:\r\nFilesystem      Size  Used Avail Use% Mounted on\r\n/dev/nvme0n1p1  200G   45G  155G  23% /data\r\n[+] Uploaded train.py -> /home/ubuntu/project/train.py\r\nTraining output:\r\nEpoch 10/10, Loss: 0.0234, Acc: 0.9812\r\n[+] Connection closed\n"
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
      children: "a) DSA\r\nb) RSA 2048\r\nc) Ed25519\r\nd) ECDSA 521"
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
      children: "a) Forwards remote port 8888 to local port 8888\r\nb) Forwards local port 8888 to remote port 8888\r\nc) Creates a SOCKS proxy on port 8888\r\nd) Connects to SSH on port 8888"
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
      children: "a) ssh-keygen -R\r\nb) ssh-add\r\nc) ssh-copy-id\r\nd) scp-key"
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
      children: "a) ProxyCommand\r\nb) ProxyJump\r\nc) ForwardAgent\r\nd) LocalForward"
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
      children: "a) Deletes source files after transfer\r\nb) Removes files at destination not present in source\r\nc) Deletes empty directories\r\nd) Removes temporary files"
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
            children: "Design a minimal, well-typed function in this chapter — Secure Shell, Key Management, Tunneling."
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
            children: "Describe a production bug caused by misunderstanding this technique — Secure Shell, Key Management, Tunneling. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Secure Shell, Key Management, Tunneling from 10 users to 10 million?"
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
            children: "Walk through how you would test a component built on this — Secure Shell, Key Management, Tunneling."
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
            children: "How would you make an implementation of this technique — Secure Shell, Key Management, Tunneling run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — Secure Shell, Key Management, Tunneling that is production-quality."
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
        children: "The time complexity of the standard approach to 07 Ssh And Remote Access is ___. — Answer: O(n) for log, O(1) for checkout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 07 Ssh And Remote Access is ___. — Answer: merge conflicts, detached HEAD, force push"
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
          }), " Your implementation of this technique — Secure Shell, Key Management, Tunneling is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
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
          children: "What is the output of the simplest correct implementation of this technique — Secure Shell, Key Management, Tunneling on an empty input?"
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
        children: "Official documentation for the primary library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original research paper introducing this concept (search Google Scholar)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Towards Data Science articles on this topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The relevant chapter in 'Designing Data-Intensive Applications' by Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repositories of production implementations & Remote Access — Secure Shell, Key Management, Tunneling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 04 — builds the foundation for 07 Ssh And Remote Access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 07 Ssh And Remote Access with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 07 Ssh And Remote Access fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 07 Ssh And Remote Access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 07 Ssh And Remote Access"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 07 Ssh And Remote Access?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 07 Ssh And Remote Access?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 07 Ssh And Remote Access asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 07 Ssh And Remote Access?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
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
            children: "07 Ssh And Remote Access is like a GPS navigation system"
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
          }), " — this chapter contributes the SSH & Remote Access — Secure Shell, Key Management, Tunneling skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
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
        children: "The primary library used in the code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pytest for unit and integration testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ruff + black for linting and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mypy for static type checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cProfile / py-spy for performance profiling & Remote Access — Secure Shell, Key Management, Tunneling"
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
        }), ": Add structured logging at each stage of the 07 Ssh And Remote Access pipeline to identify exactly where the failure occurs."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_07_ssh_and_remote_access(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 07 Ssh And Remote Access.\r\n\r\n    Key concepts: commit, branch, merge, rebase, pull request\r\n    Complexity: O(n) for log, O(1) for checkout\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 07 Ssh And Remote Access here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
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