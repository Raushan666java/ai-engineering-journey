"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[41449],{

/***/ 83122
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_24_capstone_md_459_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-24-capstone-md-459.json
const site_docs_courses_laravel_24_capstone_md_459_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/24-capstone","title":"Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS","description":"Previous Multi-Agent Systems","source":"@site/docs/courses/laravel/24-capstone.md","sourceDirName":"courses/laravel","slug":"/laravel/24-capstone","permalink":"/ai-engineering-journey/laravel/24-capstone","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"id":"24-capstone","slug":"/laravel/24-capstone","title":"Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS","sidebar_label":"Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS","sidebar_position":24},"sidebar":"course-laravel","previous":{"title":"Chapter 23: Case Study — AI-Powered Content Platform","permalink":"/ai-engineering-journey/laravel/23-case-study-ai-content"},"next":{"title":"Chapter 25: Multi-Agent Systems & Orchestration with Laravel","permalink":"/ai-engineering-journey/laravel/25-multi-agent-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/24-capstone.md


const frontMatter = {
	id: '24-capstone',
	slug: '/laravel/24-capstone',
	title: 'Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS',
	sidebar_label: 'Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS',
	sidebar_position: 24
};
const contentTitle = 'Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS';

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
  "value": "Theory — Capstone Project Specification",
  "id": "theory--capstone-project-specification",
  "level": 2
}, {
  "value": "8.1 Project Overview",
  "id": "81-project-overview",
  "level": 3
}, {
  "value": "8.2 Part A — System Architecture",
  "id": "82-part-a--system-architecture",
  "level": 3
}, {
  "value": "8.3 Part B — Data Model",
  "id": "83-part-b--data-model",
  "level": 3
}, {
  "value": "8.4 Part C — AI Agent Layer",
  "id": "84-part-c--ai-agent-layer",
  "level": 3
}, {
  "value": "8.5 Part D — MCP Servers",
  "id": "85-part-d--mcp-servers",
  "level": 3
}, {
  "value": "8.6 Part E — Search and RAG",
  "id": "86-part-e--search-and-rag",
  "level": 3
}, {
  "value": "8.7 Part F — Real-Time Collaboration",
  "id": "87-part-f--real-time-collaboration",
  "level": 3
}, {
  "value": "8.8 Part G — Deployment",
  "id": "88-part-g--deployment",
  "level": 3
}, {
  "value": "8.9 Part H — Testing Strategy",
  "id": "89-part-h--testing-strategy",
  "level": 3
}, {
  "value": "8.10 Part I — Performance Budget",
  "id": "810-part-i--performance-budget",
  "level": 3
}, {
  "value": "8.11 Part J — Monitoring",
  "id": "811-part-j--monitoring",
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
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table-1",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference-1",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix-1",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz-1",
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
    code: "code",
    details: "details",
    em: "em",
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
        id: "chapter-24-capstone-project--ai-powered-team-collaboration-saas",
        children: "Chapter 24: Capstone Project — AI-Powered Team Collaboration SaaS"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/23-case-study-ai-content",
          children: "Case Study AI Content"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/25-multi-agent-systems",
          children: "Multi-Agent Systems"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Synthesize all Laravel 13 concepts into a complete, production-grade SaaS application design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architect a multi-agent AI system with role-specialized agents, orchestration, and MCP tool exposure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a hybrid search and RAG system operating across heterogeneous content types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement real-time collaboration features using Reverb and Echo with presence channels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a comprehensive deployment, monitoring, and testing strategy for an AI-intensive Laravel application"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and enforce a strict performance budget across all system layers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Project Overview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capstone project: full-stack AI application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply all previous concepts in one project"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parts A-B: system and data model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design the overall system and relational schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parts C-D: AI agent layer and MCP servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build AI agents with MCP tool exposure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parts E-F: search, RAG, and real-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement semantic search and live collaboration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parts G-H: deployment and testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy with CI/CD and comprehensive testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parts I-J: performance budget and monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set metrics budgets and observe production"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[Part A: Architecture] --> B[Part B: Data Model]     B --> C[Part C: AI Agents]     C --> D[Part D: MCP Servers]     D --> E[Part E: Search & RAG]     E --> F[Part F: Real-Time]     F --> G[Part G: Deployment]     G --> H[Part H: Testing]     H --> I[Part I: Performance]     I --> J[Part J: Monitoring] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory--capstone-project-specification",
      children: "Theory — Capstone Project Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/24-capstone.png",
        alt: "Capstone Project"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-project-overview",
      children: "8.1 Project Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Apply all concepts from the course in a single comprehensive capstone project."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Platform Name:"
      }), " TeamSynth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tagline:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Where teams collaborate and AI amplifies every contribution."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TeamSynth is a team collaboration platform that embeds AI agents directly into the team workflow. Every artifact a team creates — documents, meeting recordings, pull requests, chat messages — is ingested into a unified knowledge base. AI agents analyze, summarize, review, and search across this corpus, turning raw collaboration output into actionable intelligence."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Value Proposition"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatically capturing and indexing every team artifact."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Providing a semantic search layer that understands intent, not just keywords."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploying specialized AI agents: meeting summarizers, document analysts, code reviewers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exposing the knowledge base and agent capabilities through MCP servers for external AI tools."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-part-a--system-architecture",
      children: "8.2 Part A — System Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "High-Level Topology"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Cloudflare (CDN, DNS, DDoS)\n       |\nLoad Balancer\n       |\n+------+------+\n|      |      |\nOctane Nodes (RoadRunner, N instances)\n       |\nRedis Cluster (Cache, Session, Queue, Horizon, Reverb Pub)\n       |\nPostgreSQL + pgvector (Users, Teams, Docs, Meetings, Embeddings)\n       |\nQueue Workers (Horizon: docs, meetings, reviews, embeddings, email)\n       |\nReverb Server (Presence channels, collaboration, agent progress)\n       |\nAI SDK Layer (DocumentAnalysis, MeetingSummarizer, CodeReview, SearchAgent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Architectural Decisions"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Octane with RoadRunner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent application in memory eliminates framework boot time. Critical for <200ms page load budget."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL + pgvector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single database for relational data and vector embeddings. No separate vector DB needed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redis for cache + queue + pub/sub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three workloads on one cluster reduces operational complexity."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separate AI worker queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AI generation can take 30-60 seconds. Isolating prevents head-of-line blocking on request queues."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-part-b--data-model",
      children: "8.3 Part B — Data Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The data model supports five domain entities: User, Team, Project, Document, Meeting, and CodeReview. Each entity is team-scoped via a team_id foreign key. The embedding_cache table stores pgvector embeddings polymorphically across all content types."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "CREATE TABLE users (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    name            VARCHAR(255) NOT NULL,\n    email           VARCHAR(255) NOT NULL UNIQUE,\n    password        VARCHAR(255) NOT NULL,\n    avatar_url      VARCHAR(500) NULL,\n    preferences     JSON,\n    stripe_id       VARCHAR(255) NULL,\n    trial_ends_at   TIMESTAMP NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n) ENGINE=InnoDB;\n\nCREATE TABLE teams (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    owner_id        BIGINT UNSIGNED NOT NULL,\n    name            VARCHAR(255) NOT NULL,\n    slug            VARCHAR(255) NOT NULL UNIQUE,\n    plan            ENUM('free', 'pro', 'enterprise') NOT NULL DEFAULT 'free',\n    settings        JSON,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    CONSTRAINT fk_team_owner FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\nCREATE TABLE team_members (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    team_id         BIGINT UNSIGNED NOT NULL,\n    user_id         BIGINT UNSIGNED NOT NULL,\n    role            ENUM('owner', 'admin', 'member', 'viewer') NOT NULL DEFAULT 'member',\n    joined_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    UNIQUE INDEX idx_team_user (team_id, user_id),\n    CONSTRAINT fk_tm_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,\n    CONSTRAINT fk_tm_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\nCREATE TABLE projects (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    team_id         BIGINT UNSIGNED NOT NULL,\n    owner_id        BIGINT UNSIGNED NOT NULL,\n    name            VARCHAR(255) NOT NULL,\n    slug            VARCHAR(255) NOT NULL,\n    description     TEXT,\n    status          ENUM('active', 'archived', 'completed') NOT NULL DEFAULT 'active',\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    INDEX idx_team (team_id),\n    UNIQUE INDEX idx_team_slug (team_id, slug),\n    CONSTRAINT fk_project_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,\n    CONSTRAINT fk_project_owner FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\nCREATE TABLE documents (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    project_id      BIGINT UNSIGNED NOT NULL,\n    team_id         BIGINT UNSIGNED NOT NULL,\n    author_id       BIGINT UNSIGNED NOT NULL,\n    title           VARCHAR(500) NOT NULL,\n    slug            VARCHAR(500) NOT NULL,\n    body            LONGTEXT,\n    summary         TEXT,\n    status          ENUM('draft', 'review', 'published', 'archived') NOT NULL DEFAULT 'draft',\n    word_count      INT UNSIGNED NOT NULL DEFAULT 0,\n    last_embedded_at TIMESTAMP NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    INDEX idx_team (team_id),\n    FULLTEXT INDEX ft_docs (title, body),\n    UNIQUE INDEX idx_project_slug (project_id, slug),\n    CONSTRAINT fk_doc_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,\n    CONSTRAINT fk_doc_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,\n    CONSTRAINT fk_doc_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\nCREATE TABLE document_versions (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    document_id     BIGINT UNSIGNED NOT NULL,\n    version_number  INT UNSIGNED NOT NULL,\n    title           VARCHAR(500) NOT NULL,\n    body            LONGTEXT,\n    summary         TEXT,\n    editor_id       BIGINT UNSIGNED NULL,\n    change_summary  VARCHAR(500),\n    checksum        CHAR(64) NOT NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    INDEX idx_document (document_id),\n    UNIQUE INDEX idx_doc_version (document_id, version_number),\n    CONSTRAINT fk_dv_document FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE,\n    CONSTRAINT fk_dv_editor FOREIGN KEY (editor_id) REFERENCES users(id) ON DELETE SET NULL\n) ENGINE=InnoDB;\n\nCREATE TABLE meetings (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    project_id      BIGINT UNSIGNED NOT NULL,\n    team_id         BIGINT UNSIGNED NOT NULL,\n    organizer_id    BIGINT UNSIGNED NOT NULL,\n    title           VARCHAR(500) NOT NULL,\n    description     TEXT,\n    meeting_url     VARCHAR(500),\n    started_at      TIMESTAMP NULL,\n    ended_at        TIMESTAMP NULL,\n    duration_seconds INT UNSIGNED NULL,\n    status          ENUM('scheduled', 'in_progress', 'completed', 'cancelled') NOT NULL DEFAULT 'scheduled',\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    INDEX idx_project (project_id),\n    INDEX idx_team (team_id),\n    CONSTRAINT fk_meeting_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,\n    CONSTRAINT fk_meeting_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,\n    CONSTRAINT fk_meeting_organizer FOREIGN KEY (organizer_id) REFERENCES users(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\nCREATE TABLE meeting_transcripts (\n    id                BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    meeting_id        BIGINT UNSIGNED NOT NULL,\n    speaker_id        BIGINT UNSIGNED NULL,\n    speaker_name      VARCHAR(255) NOT NULL,\n    content           TEXT NOT NULL,\n    start_seconds     DECIMAL(8,2) NOT NULL,\n    end_seconds       DECIMAL(8,2) NOT NULL,\n    language          CHAR(2) NOT NULL DEFAULT 'en',\n    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    INDEX idx_meeting (meeting_id),\n    CONSTRAINT fk_transcript_meeting FOREIGN KEY (meeting_id) REFERENCES meetings(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\nCREATE TABLE meeting_summaries (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    meeting_id      BIGINT UNSIGNED NOT NULL UNIQUE,\n    summary         TEXT NOT NULL,\n    action_items    JSON,\n    decisions       JSON,\n    key_topics      JSON,\n    sentiment       VARCHAR(50),\n    generated_by    VARCHAR(100) NOT NULL DEFAULT 'meeting-summarizer',\n    model           VARCHAR(100) NOT NULL,\n    duration_ms     INT UNSIGNED NOT NULL DEFAULT 0,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    CONSTRAINT fk_ms_meeting FOREIGN KEY (meeting_id) REFERENCES meetings(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\nCREATE TABLE code_reviews (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    project_id      BIGINT UNSIGNED NOT NULL,\n    team_id         BIGINT UNSIGNED NOT NULL,\n    author_id       BIGINT UNSIGNED NOT NULL,\n    pr_url          VARCHAR(500) NOT NULL,\n    pr_title        VARCHAR(500) NOT NULL,\n    pr_description  TEXT,\n    branch          VARCHAR(255),\n    base_branch     VARCHAR(255),\n    commit_sha      CHAR(40),\n    status          ENUM('pending', 'in_review', 'changes_requested', 'approved') NOT NULL DEFAULT 'pending',\n    ai_reviewed     BOOLEAN NOT NULL DEFAULT FALSE,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n    INDEX idx_project (project_id),\n    INDEX idx_team (team_id),\n    UNIQUE INDEX idx_pr_url (pr_url),\n    CONSTRAINT fk_cr_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,\n    CONSTRAINT fk_cr_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,\n    CONSTRAINT fk_cr_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\nCREATE TABLE review_comments (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    code_review_id  BIGINT UNSIGNED NOT NULL,\n    author_id       BIGINT UNSIGNED NULL,\n    author_type     ENUM('human', 'ai') NOT NULL DEFAULT 'human',\n    file_path       VARCHAR(500),\n    line_start      INT UNSIGNED,\n    line_end        INT UNSIGNED,\n    body            TEXT NOT NULL,\n    severity        ENUM('info', 'warning', 'critical') NOT NULL DEFAULT 'info',\n    category        VARCHAR(100),\n    resolved_at     TIMESTAMP NULL,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    INDEX idx_review (code_review_id),\n    INDEX idx_severity (severity),\n    CONSTRAINT fk_rc_review FOREIGN KEY (code_review_id) REFERENCES code_reviews(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\nCREATE TABLE embedding_cache (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    embeddable_type VARCHAR(255) NOT NULL,\n    embeddable_id   BIGINT UNSIGNED NOT NULL,\n    chunk_index     INT UNSIGNED NOT NULL,\n    chunk_text      TEXT NOT NULL,\n    embedding       VECTOR(1536) NOT NULL,\n    content_type    ENUM('document', 'meeting', 'code', 'comment') NOT NULL,\n    team_id         BIGINT UNSIGNED NOT NULL,\n    language        CHAR(2) NOT NULL DEFAULT 'en',\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    INDEX idx_embeddable (embeddable_type, embeddable_id),\n    INDEX idx_team (team_id),\n    INDEX idx_content_type (content_type),\n    CONSTRAINT fk_ec_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE\n) ENGINE=InnoDB;\n\n-- HNSW index for fast ANN search\n-- CREATE INDEX idx_embedding_hnsw ON embedding_cache\n--     USING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 200);\n\nCREATE TABLE agent_logs (\n    id              BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n    team_id         BIGINT UNSIGNED NOT NULL,\n    agent_type      VARCHAR(100) NOT NULL,\n    session_id      CHAR(36) NOT NULL,\n    user_id         BIGINT UNSIGNED NULL,\n    action          VARCHAR(100) NOT NULL,\n    input_tokens    INT UNSIGNED NOT NULL DEFAULT 0,\n    output_tokens   INT UNSIGNED NOT NULL DEFAULT 0,\n    model           VARCHAR(100) NOT NULL,\n    duration_ms     INT UNSIGNED NOT NULL DEFAULT 0,\n    status          ENUM('started', 'completed', 'failed') NOT NULL DEFAULT 'started',\n    error_message   TEXT NULL,\n    metadata        JSON,\n    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    INDEX idx_team (team_id),\n    INDEX idx_agent_type (agent_type),\n    INDEX idx_created_at (created_at)\n) ENGINE=InnoDB;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-part-c--ai-agent-layer",
      children: "8.4 Part C — AI Agent Layer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TeamSynth defines four specialized agents built on a shared ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BaseAgent"
      }), " class. Each agent logs every execution to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_logs"
      }), " for observability and cost tracking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BaseAgent"
      }), " provides scaffolding: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logStart()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logComplete()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logFailed()"
      }), " methods that write structured records to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "agent_logs"
      }), ". Every agent extends this class and implements a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle(array $input): array"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DocumentAnalysisAgent"
      }), " — Analyzes documents to extract key points, suggest improvements, and compute quality scores. Supports three actions: summarize (3-5 sentence summary), suggest (actionable improvement ideas), and analyze (key points, quality score 1-10, readability level, suggested tags). Input is a document_id; output is structured JSON via the AI SDK with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "response_format"
      }), " set to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "json_object"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MeetingSummarizerAgent"
      }), " — Takes a meeting with its transcript segments (speaker-labeled with start/end timestamps), sends the full transcript to the AI model, and returns a structured summary. Output includes summary text, action items (with owner and deadline), decisions made, key topics discussed, and overall sentiment. The agent selects the correct model based on transcript length: gpt-4o for short meetings, gpt-4o-mini for standard, with automatic truncation of transcripts exceeding the model context window."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CodeReviewAgent"
      }), " — Connects to a GitHub PR via the PR URL, fetches the diff using the GitHub API, and analyzes each changed file. For each file, it examines the diff hunks and produces review comments tagged by severity (info, warning, critical) and category (security, performance, style, bug, best_practice). The agent respects the existing codebase style by analyzing surrounding context. Output also includes an overall PR summary, estimated risk score, and a pass/fail recommendation for the merge."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SearchAgent"
      }), " — The RAG agent. Accepts a natural language query, performs hybrid search (vector + full-text) across all team content, reranks results, and returns answers with source citations. Supports scoping to specific content types (documents, meetings, code) and date ranges. Implements semantic caching: if a semantically similar query was answered recently, the cached response is returned."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Chaining — Code Review Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App/Services/CodeReviewPipeline.php\npublic function runFullReview(int $codeReviewId): array\n{\n    $review = CodeReview::findOrFail($codeReviewId);\n\n    // Step 1: AI code review\n    $comments = $this->codeReviewAgent->handle([\n        'pr_url' => $review->pr_url,\n        'review_id' => $review->id,\n    ]);\n\n    // Step 2: For critical comments, deep-dive with DocumentAnalysisAgent\n    $deepDives = [];\n    foreach ($comments as $comment) {\n        if ($comment['severity'] === 'critical') {\n            $deepDives[] = $this->docAgent->handle([\n                'document_id' => $this->findRelatedDocument($comment),\n                'action' => 'analyze',\n            ]);\n        }\n    }\n\n    // Step 3: Post summary to PR\n    $this->githubService->postPRComment($review->pr_url, [\n        'summary' => $comments['overall_summary'],\n        'critical_count' => count($deepDives),\n    ]);\n\n    return ['comments' => $comments, 'deep_dives' => $deepDives];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-part-d--mcp-servers",
      children: "8.5 Part D — MCP Servers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MCP servers expose TeamSynth capabilities to external AI clients via JSON-RPC endpoints."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DocumentServer"
      }), " — Tools: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "search_documents"
      }), " (hybrid search across content), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "summarize_document"
      }), " (AI summary), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "analyze_document"
      }), " (quality + structure analysis). Each tool accepts a workspace context parameter for team-scoping."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CodeReviewServer"
      }), " — Tools: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "review_pr"
      }), " (full AI code review), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lint_check"
      }), " (static analysis via LLM), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "security_scan"
      }), " (vulnerability pattern detection). Returns structured comments with severity, category, file path, and line numbers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MeetingServer"
      }), " — Tools: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transcribe"
      }), " (audio-to-text), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "summarize"
      }), " (transcript to structured summary), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extract_action_items"
      }), " (parse decisions from raw text)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// routes/mcp.php\nuse App\\Mcp\\DocumentServer;\nuse App\\Mcp\\CodeReviewServer;\nuse App\\Mcp\\MeetingServer;\n\nRoute::post('mcp/document/search', [DocumentServer::class, 'search']);\nRoute::post('mcp/document/summarize', [DocumentServer::class, 'summarize']);\nRoute::post('mcp/code/review', [CodeReviewServer::class, 'review']);\nRoute::post('mcp/code/lint', [CodeReviewServer::class, 'lint']);\nRoute::post('mcp/meeting/transcribe', [MeetingServer::class, 'transcribe']);\nRoute::post('mcp/meeting/summarize', [MeetingServer::class, 'summarize']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each MCP endpoint validates the JSON-RPC envelope (jsonrpc version, method, params, id), dispatches to the appropriate handler, and returns a properly formatted JSON-RPC response with result or error."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-part-e--search-and-rag",
      children: "8.6 Part E — Search and RAG"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Search operates at three tiers with progressive fallback:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Full-Text Search (Tier 1)"
      }), " — PostgreSQL FULLTEXT index on title and body. Uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tsvector"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "plainto_tsquery"
      }), ". Fast, zero external dependencies. Suitable for exact keyword matching and prefix queries. Response time: <50ms at p95."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vector Search (Tier 2)"
      }), " — pgvector cosine similarity on 1536-dimension embeddings. HNSW index with m=16, ef_construction=200 for approximate nearest neighbor. Understands semantic intent. Response time: <200ms at p95 for 1M vectors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid Search (Tier 3)"
      }), " — Weighted combination: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hybrid_score = vector_score * 0.7 + fts_score * 0.3"
      }), ". Results are deduplicated and reranked. Weights are configurable per content type (e.g., code reviews emphasize full-text, meetings emphasize semantic)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reranking"
      }), " — A lightweight cross-encoder reranks the top 50 hybrid results. Each candidate pair (query, chunk) is scored and the top 10 returned. Reranking runs in a queue job; the top 3 from un-reranked hybrid are shown immediately while reranked results stream in via Reverb broadcast."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search Agent Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User submits natural language query."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SearchAgent generates embedding for query (cached if identical within 24h)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid search runs across all team content, filtered by team_id and optional content_type."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Top 50 results reranked by cross-encoder."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LLM generates answer with inline citations using retrieved context."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Response includes answer, sources (title, similarity, excerpt), and confidence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result cached via semantic key (query embedding hash + options hash) for 5-60 min TTL."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-part-f--real-time-collaboration",
      children: "8.7 Part F — Real-Time Collaboration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reverb with Laravel Echo powers four real-time features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Presence Channels"
      }), " — Each project has a presence channel (", (0,jsx_runtime.jsx)(_components.code, {
        children: "presence-project.{id}"
      }), "). Echo.join() tracks who is viewing the same resource. Shows user avatars in the browser. Users are automatically removed on disconnect via heartbeat."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Editing Status"
      }), " — When a user types, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DocumentEditing"
      }), " event broadcasts to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "project.{id}.document.{id}"
      }), " with the user ID and cursor position. Echo.whisper provides low-latency cursor sync, throttled to once per 500ms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Progress Broadcasts"
      }), " — Agent execution stages broadcast to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "team.{id}.agents"
      }), ". The UI shows a live progress bar: stage name, status, and metadata (e.g., \"Research completed — 5 facts found\"). Each broadcast includes agent type, status enum, and an optional metadata payload."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification Streams"
      }), " — Code review assignments, meeting reminders, document mentions broadcast to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "user.{id}.notifications"
      }), ". The UI shows action-button toasts. Notifications are also persisted in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "notifications"
      }), " table for offline access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// App/Events/AgentProgressUpdated.php\nclass AgentProgressUpdated implements ShouldBroadcast\n{\n    public function __construct(\n        public string $agentType,\n        public string $status,\n        public int $teamId,\n        public array $metadata = [],\n    ) {}\n\n    public function broadcastOn(): array\n    {\n        return [new Channel(\"team.{$this->teamId}.agents\")];\n    }\n\n    public function broadcastWith(): array\n    {\n        return [\n            'agent_type' => $this->agentType,\n            'status'     => $this->status,\n            'metadata'   => $this->metadata,\n            'timestamp'  => now()->toIso8601String(),\n        ];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "88-part-g--deployment",
      children: "8.8 Part G — Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TeamSynth uses Laravel Vapor for serverless API deployment paired with managed infrastructure."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vapor (Serverless API)"
      }), " — The Octane application runs as a Vapor project. Each Vapor environment (staging, production) maps to a separate team. Auto-scaling handles traffic spikes without manual intervention. Vapor manages SSL certificates and custom domains."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud (Managed Database + Redis)"
      }), " — PostgreSQL with pgvector runs on a managed cloud provider (Crunchy Bridge, RDS, or Cloud SQL). Redis is a managed cluster (Upstash or ElastiCache) sized at 50GB. Both databases have automated backups with point-in-time recovery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Envoyer (Zero-Downtime Deployments)"
      }), " — Deployment script: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vapor deploy production"
      }), " triggers Envoyer. Envoyer runs health checks against the new deployment, migrates the database, and switches the load balancer only after all checks pass. Rollback is a single click."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forge (Queue Workers + Octane)"
      }), " — Forge manages the Octane server processes and Horizon queue workers. Supervisors are configured: one for request queues (3 processes, 300s timeout) and one for AI queues (5 processes, 600s timeout)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI/CD Pipeline"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Git push → GitHub Actions:\n  1. npm ci && npm run build (frontend assets)\n  2. composer install --no-dev\n  3. php artisan test (feature + unit)\n  4. php artisan dusk (browser tests)\n  5. vapor deploy staging\n  6. Envoyer health check\n  7. npm run cy:run (E2E tests on staging)\n  8. vapor deploy production (manual approval gate)\n  9. Envoyer deploy production → rollback on failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "89-part-h--testing-strategy",
      children: "8.9 Part H — Testing Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Tests/Unit/Agents/DocumentAnalysisAgentTest.php\nclass DocumentAnalysisAgentTest extends TestCase\n{\n    public function test_it_returns_structured_analysis(): void\n    {\n        // Fake the AI SDK to return controlled JSON\n        OpenAI::fake([\n            Chat::create(response: [\n                'choices' => [[\n                    'message' => [\n                        'content' => json_encode([\n                            'key_points' => ['Point A', 'Point B'],\n                            'summary' => 'Test summary.',\n                            'quality_score' => 8,\n                        ]),\n                    ],\n                ]],\n                'usage' => ['prompt_tokens' => 100, 'completion_tokens' => 50],\n            ]),\n        ]);\n\n        $document = Document::factory()->create(['body' => 'Test content.']);\n\n        $agent = new DocumentAnalysisAgent();\n        $result = $agent->handle([\n            'document_id' => $document->id,\n            'action' => 'analyze',\n        ]);\n\n        $this->assertArrayHasKey('key_points', $result);\n        $this->assertArrayHasKey('summary', $result);\n        $this->assertGreaterThanOrEqual(1, $result['quality_score']);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Layers"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHPUnit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent output structure, model scopes, service logic with mocked AI SDK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHPUnit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API endpoint behavior, authentication, validation, rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHPUnit + Testbench"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAG pipeline end-to-end (real pgvector), queue jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Dusk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverb connection, Echo event reception, presence channel membership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom evals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent output accuracy, search relevance (NDCG), moderation precision"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AI SDK Fakes"
      }), " — The OpenAI facade can be faked with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OpenAI::fake([...])"
      }), " to return controlled responses. This eliminates external API calls during testing while validating that the agent correctly parses structured output and handles edge cases (missing fields, invalid JSON, API errors)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "810-part-i--performance-budget",
      children: "8.10 Part I — Performance Budget"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target (p95)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurement Tool"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page load (server-side)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Laravel Clockwork, Telescope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom middleware timer, logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI generation (1000 words)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AgentLog.duration_ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API response (non-AI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telescope request timeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time event latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverb metrics endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizon job timeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database query (p95)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telescope queries tab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queue job wait time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizon dashboard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Budget Enforcement"
      }), " — A custom middleware tags every response with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X-TeamSynth-Time: {duration_ms}"
      }), ". A CI pipeline step runs Lighthouse CI to catch regressions. Alert thresholds in Pulse trigger notifications when any metric exceeds 120% of the budget for 5 consecutive minutes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "811-part-j--monitoring",
      children: "8.11 Part J — Monitoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pulse Dashboard"
      }), " — Laravel Pulse provides at-a-glance monitoring for slow queries, slow requests, queue throughput, cache hit ratio, and Redis memory usage. Custom Pulse cards display AI token usage per agent type and content type distribution."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Telescope Debugging"
      }), " — Telescope captures every request, query, job, event, and cache operation in development and staging. In production, Telescope is configured with a 1% sample rate to reduce overhead while retaining debugging capability for slow requests (automatically captured at 100% sample when duration exceeds 1s)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nightwatch Error Tracking"
      }), " — Nightwatch captures and aggregates PHP exceptions, JavaScript errors, and scheduled task failures. Errors are grouped by fingerprint (exception class + file + line). Each error includes the Telescope request ID for full context replay."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Metrics"
      }), " — Logged to Prometheus via a statsd bridge:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Labels"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ai_token_usage_total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "agent_type, model, status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token consumption per agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "queue_length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "queue_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizon queue depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cache_hit_ratio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cache_store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache effectiveness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "search_latency_ms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "search_tier (fts, vector, hybrid)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "embedding_count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "content_type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vector store growth rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "agent_execution_duration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "agent_type, status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent speed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert Rules"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pager: AI token usage exceeds monthly budget by 80% (Slack webhook)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warning: Search p95 latency exceeds 500ms for 5 minutes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical: Queue backlog exceeds 10,000 jobs for 2 minutes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Info: Cache hit ratio drops below 80% for 30 minutes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System design upfront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to change later"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-agent communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP Servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interoperability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security considerations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance Budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics with thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents regressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires CI enforcement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan make:agent ContentAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a new AI agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan reverb:start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start WebSocket server"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-agent sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent interoperability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth and security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent deploys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the first step in the capstone project?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Write tests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Design the system architecture"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Install dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Configure the database"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Part A is system architecture design before any code is written."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How are AI agents structured in this project?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Monolithic single agent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Specialized agents per capability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) External API only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Stateless functions"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Specialized agents handle content generation, moderation, and search separately."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of a performance budget?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Estimate project cost"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Set metrics thresholds enforced in CI"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Track developer productivity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Measure code coverage"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** A performance budget defines acceptable thresholds for response times, query counts, and memory usage, enforced in CI."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When should CI/CD be set up?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) After the first release"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Before the first feature commit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) During beta testing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Only for production"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** CI/CD should be set up before the first feature commit for automated deployment from day one."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table-1",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System design upfront"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to change later"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-agent communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP Servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interoperability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security considerations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance Budget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metrics with thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents regressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires CI enforcement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-1",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan make:agent ContentAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a new AI agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "php artisan reverb:start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start WebSocket server"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix-1",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Challenge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent Layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized agents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of concerns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inter-agent sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MCP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent interoperability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auth and security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent deploys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-1",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the first step in the capstone project?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Write tests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Design the system architecture"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Install dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Configure the database"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Part A is system architecture design before any code is written."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How are AI agents structured in this project?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Monolithic single agent"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Specialized agents per capability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) External API only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Stateless functions"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Specialized agents handle content generation, moderation, and search separately."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of a performance budget?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Estimate project cost"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Set metrics thresholds enforced in CI"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Track developer productivity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Measure code coverage"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** A performance budget defines acceptable thresholds for response times, query counts, and memory usage, enforced in CI."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When should CI/CD be set up?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) After the first release"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Before the first feature commit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) During beta testing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Only for production"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** CI/CD should be set up before the first feature commit for automated deployment from day one."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TeamSynth is a team collaboration platform that uses four specialized AI agents (DocumentAnalysis, MeetingSummarizer, CodeReview, Search) to extract actionable intelligence from team artifacts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The architecture follows a layered topology: Cloudflare CDN → Load Balancer → Octane web nodes → Redis → PostgreSQL + pgvector → Queue Workers → Reverb → AI SDK."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The data model stores all content polymorphically. Embeddings use pgvector with a 1536-dimension HNSW index across document, meeting, code, and comment content types."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Search uses three tiers: PostgreSQL full-text (Tier 1, <50ms), pgvector cosine similarity (Tier 2, <200ms), and hybrid weighted scoring (Tier 3, <500ms). A cross-encoder reranker improves precision."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time collaboration uses Reverb with Echo for presence channels, typing indicators, agent progress broadcasts, and notification streams."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MCP servers expose search_documents, summarize_document, review_pr, lint_check, transcribe, and summarize as JSON-RPC tools for external AI clients."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deployment uses Vapor for serverless Octane, managed PostgreSQL + Redis, Envoyer for zero-downtime deploys, and Forge for queue workers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing spans unit (agent output), feature (API), integration (RAG pipeline), browser (Dusk for WebSockets), and custom evals (search relevance, output quality)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance budget: page load <200ms, search <500ms, AI generation <5s, API <100ms, real-time <100ms latency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitoring uses Pulse (dashboards), Telescope (request debugging), Nightwatch (error tracking), and custom Prometheus metrics for token usage, queue length, and cache hit ratio."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does the architecture use separate queue supervisors for AI and non-AI workloads? What problem does this prevent?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the three-tier search strategy. Under what circumstances would you skip tier 1 and go directly to tier 2 or tier 3?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do MCP servers differ from REST API endpoints? When would an external AI client use an MCP tool instead of a direct API call?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The agent_logs table captures token usage per agent execution. How would you use this data to forecast monthly AI costs and set per-team budget limits?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the role of the cross-encoder reranker. Why does the system show immediate results from hybrid search while reranked results arrive later?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement the CodeReviewAgent"
          }), ": Write the full ", (0,jsx_runtime.jsx)(_components.code, {
            children: "handle()"
          }), " method that connects to a GitHub PR, fetches the diff, analyzes each changed file using the AI SDK, and creates ", (0,jsx_runtime.jsx)(_components.code, {
            children: "review_comments"
          }), " records. Include logic to detect the programming language from the file extension and adjust the review prompt accordingly (e.g., PHP review checks for SQL injection, Laravel best practices; JavaScript checks for XSS, dependency vulnerabilities)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build the agent progress broadcasting system"
          }), ": Design the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AgentProgressUpdated"
          }), " event, the Livewire component that listens for it, and the UI that shows a multi-step progress bar during code review. The bar should show each stage (fetching, analyzing file 1, analyzing file 2, ..., generating summary) with estimated time remaining."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design the team-level token budget system"
          }), ": Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TeamTokenBudget"
          }), " model that stores monthly token limits per team. Implement a middleware that, before each AI SDK call, checks whether the team has remaining budget. If exceeded, the agent returns a cached response or a degraded result. Include an Artisan command to reset budgets monthly and send warning notifications at 80%, 90%, and 100% usage."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implement a semantic caching layer with TTL decay based on query similarity"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Design and build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SemanticCache"
      }), " service that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stores"
        }), ": Array of (query_embedding, response, created_at, access_count, last_accessed_at) in a PostgreSQL table ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semantic_cache"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retrieves"
        }), ": Given a new query, generate its embedding, then find the nearest neighbor in the cache using cosine similarity. If similarity > 0.95, return the cached response. If similarity is between 0.85 and 0.95, return the cached response but mark it as \"degraded\" (add an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X-Cache-Quality: degraded"
        }), " header)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL decay"
        }), ": Each cache entry has a base TTL of 24 hours. Each time an entry is accessed, its effective TTL is extended by 1 hour (up to a max of 48 hours). Entries with access_count > 100 have their base TTL doubled to 48 hours."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache warming"
        }), ": When a team generates content (new document, meeting summary, code review), the system proactively generates 5 likely search queries for that content and pre-populates the cache."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invalidation"
        }), ": When a document is updated, all cache entries whose query embedding is similar (cosine > 0.8) to the document's embedding are deleted or marked stale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write the migration for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semantic_cache"
      }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SemanticCache"
      }), " service class, the cache warming job, the invalidation logic in the document update observer, and the middleware that checks the cache before executing a full RAG pipeline. Include explanations of how you handle concurrent writes and the trade-off between cache freshness and hit rate."]
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