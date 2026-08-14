"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[16175],{

/***/ 39286
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_05_fastapi_backend_06_database_with_sqlalchemy_md_410_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-05-fastapi-backend-06-database-with-sqlalchemy-md-410.json
const site_docs_courses_ai_engineering_placement_05_fastapi_backend_06_database_with_sqlalchemy_md_410_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fastapi-backend/06-database-with-sqlalchemy","title":"Database with SQLAlchemy — ORM, Migrations, and Repository Pattern","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/05-fastapi-backend/06-database-with-sqlalchemy.md","sourceDirName":"courses/ai-engineering-placement/05-fastapi-backend","slug":"/ai-engineering-placement/05-fastapi-backend/06-database-with-sqlalchemy","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/06-database-with-sqlalchemy","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":69,"frontMatter":{"id":"06-database-with-sqlalchemy","slug":"/ai-engineering-placement/05-fastapi-backend/06-database-with-sqlalchemy","title":"Database with SQLAlchemy — ORM, Migrations, and Repository Pattern","sidebar_label":"Database with SQLAlchemy — ORM, Migrations, and Repository Pattern","sidebar_position":69},"sidebar":"placementSidebar","previous":{"title":"Authentication and Authorization — JWT, OAuth2, and RBAC","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/05-authentication-and-authz"},"next":{"title":"Async Patterns — Concurrency, Background Tasks, and Event-Driven Design","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/07-async-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/05-fastapi-backend/06-database-with-sqlalchemy.md


const frontMatter = {
	id: '06-database-with-sqlalchemy',
	slug: '/ai-engineering-placement/05-fastapi-backend/06-database-with-sqlalchemy',
	title: 'Database with SQLAlchemy — ORM, Migrations, and Repository Pattern',
	sidebar_label: 'Database with SQLAlchemy — ORM, Migrations, and Repository Pattern',
	sidebar_position: 69
};
const contentTitle = 'Database with SQLAlchemy — ORM, Migrations, and Repository Pattern';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "6.1 SQLAlchemy Setup",
  "id": "61-sqlalchemy-setup",
  "level": 2
}, {
  "value": "6.2 ORM Models",
  "id": "62-orm-models",
  "level": 2
}, {
  "value": "6.3 CRUD Operations",
  "id": "63-crud-operations",
  "level": 2
}, {
  "value": "6.4 Relationships",
  "id": "64-relationships",
  "level": 2
}, {
  "value": "6.5 Alembic Migrations",
  "id": "65-alembic-migrations",
  "level": 2
}, {
  "value": "6.6 Repository Pattern",
  "id": "66-repository-pattern",
  "level": 2
}, {
  "value": "6.7 Query Optimization",
  "id": "67-query-optimization",
  "level": 2
}, {
  "value": "6.8 Transactions",
  "id": "68-transactions",
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
    hr: "hr",
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
        id: "database-with-sqlalchemy--orm-migrations-and-repository-pattern",
        children: "Database with SQLAlchemy — ORM, Migrations, and Repository Pattern"
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
            children: "Set up SQLAlchemy with FastAPI using the async pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define ORM models with relationships, indexes, and constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement CRUD operations with proper session management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Alembic for database migrations and schema versioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply the repository pattern for data access abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle transactions, connection pooling, and query optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FastAPI is the modern Python framework for building AI APIs. Its async support, automatic documentation, and type safety make it ideal for serving ML models at scale. This module covers production-grade API development."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding database with sqlalchemy is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how database with sqlalchemy works in practice."
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
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLAlchemy Setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Engine, session, async vs sync"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ORM Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative base, columns, relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRUD Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create, read, update, delete patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-many, many-to-many, lazy loading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alembic Migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema versioning, auto-generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repository Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data access abstraction layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eager loading, indexing, profiling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit of work, rollback, nested transactions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Engine Setup] --> B[ORM Models]\n    B --> C[CRUD]\n    C --> D[Relationships]\n    D --> E[Migrations]\n    E --> F[Repository Pattern]\n    F --> G[Query Optimization]\n    G --> H[Transactions]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-sqlalchemy-setup",
      children: "6.1 SQLAlchemy Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLAlchemy is the most popular Python ORM. FastAPI works best with the async SQLAlchemy pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker\nfrom sqlalchemy.orm import DeclarativeBase\nfrom typing import AsyncGenerator\n\nDATABASE_URL = \"postgresql+asyncpg://user:pass@localhost/dbname\"\n\n## Async engine\nengine = create_async_engine(DATABASE_URL, echo=True, pool_size=5, max_overflow=10)\n\n## Session factory\nasync_session_factory = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)\n\n## Base class for models\nclass Base(DeclarativeBase):\n    pass\n\n## Database dependency for FastAPI\nasync def get_db() -> AsyncGenerator[AsyncSession, None]:\n    async with async_session_factory() as session:\n        try:\n            yield session\n            await session.commit()\n        except Exception:\n            await session.rollback()\n            raise\n        finally:\n            await session.close()\n\n## Application setup\nfrom fastapi import FastAPI, Depends\nfrom contextlib import asynccontextmanager\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI):\n    # Create tables on startup\n    async with engine.begin() as conn:\n        await conn.run_sync(Base.metadata.create_all)\n    yield\n    await engine.dispose()\n\napp = FastAPI(lifespan=lifespan)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sync alternative"
      }), " (simpler for smaller projects):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sqlalchemy import create_engine\nfrom sqlalchemy.orm import sessionmaker, Session\n\nDATABASE_URL = \"sqlite:///./app.db\"\nengine = create_engine(DATABASE_URL, connect_args={\"check_same_thread\": False})\nSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-orm-models",
      children: "6.2 ORM Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define database tables as Python classes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sqlalchemy import (\n    Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text, Enum, Index\n)\nfrom sqlalchemy.orm import relationship\nfrom datetime import datetime, timezone\nimport enum\n\nclass UserRole(str, enum.Enum):\n    ADMIN = \"admin\"\n    USER = \"user\"\n\nclass User(Base):\n    __tablename__ = \"users\"\n\n    id = Column(Integer, primary_key=True, index=True)\n    username = Column(String(50), unique=True, nullable=False, index=True)\n    email = Column(String(255), unique=True, nullable=False)\n    hashed_password = Column(String(255), nullable=False)\n    full_name = Column(String(100))\n    role = Column(Enum(UserRole), default=UserRole.USER)\n    is_active = Column(Boolean, default=True)\n    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))\n    updated_at = Column(DateTime(timezone=True), onupdate=lambda: datetime.now(timezone.utc))\n\n    # Relationships\n    posts = relationship(\"Post\", back_populates=\"author\", cascade=\"all, delete-orphan\")\n\n    # Composite index\n    __table_args__ = (\n        Index(\"idx_users_active_role\", \"is_active\", \"role\"),\n    )\n\nclass Post(Base):\n    __tablename__ = \"posts\"\n\n    id = Column(Integer, primary_key=True, index=True)\n    title = Column(String(200), nullable=False)\n    content = Column(Text, nullable=False)\n    published = Column(Boolean, default=False)\n    author_id = Column(Integer, ForeignKey(\"users.id\"), nullable=False)\n    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))\n\n    author = relationship(\"User\", back_populates=\"posts\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Column types"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "str"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-length string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "str"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large text field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating point number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True/False"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DateTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "datetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Date and time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enum.Enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enumeration values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JSON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dict/list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UUID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "uuid.UUID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UUID values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LargeBinary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-crud-operations",
      children: "6.3 CRUD Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sqlalchemy import select, update, delete\nfrom sqlalchemy.ext.asyncio import AsyncSession\n\n## CREATE\nasync def create_user(db: AsyncSession, user_data: dict) -> User:\n    user = User(**user_data)\n    db.add(user)\n    await db.flush()  # Assigns ID without committing\n    await db.refresh(user)  # Loads database-generated values\n    return user\n\n@app.post(\"/users\", status_code=201)\nasync def create_user_endpoint(user: UserCreate, db: AsyncSession = Depends(get_db)):\n    db_user = await create_user(db, user.model_dump())\n    return db_user\n\n## READ\nasync def get_user(db: AsyncSession, user_id: int) -> User | None:\n    result = await db.execute(select(User).where(User.id == user_id))\n    return result.scalar_one_or_none()\n\nasync def get_users(db: AsyncSession, skip: int = 0, limit: int = 100) -> list[User]:\n    result = await db.execute(\n        select(User).offset(skip).limit(limit).order_by(User.created_at.desc())\n    )\n    return result.scalars().all()\n\n@app.get(\"/users/{user_id}\")\nasync def get_user_endpoint(user_id: int, db: AsyncSession = Depends(get_db)):\n    user = await get_user(db, user_id)\n    if not user:\n        raise HTTPException(status_code=404, detail=\"User not found\")\n    return user\n\n## UPDATE\nasync def update_user(db: AsyncSession, user_id: int, update_data: dict) -> User | None:\n    user = await get_user(db, user_id)\n    if not user:\n        return None\n    for key, value in update_data.items():\n        setattr(user, key, value)\n    await db.flush()\n    await db.refresh(user)\n    return user\n\n@app.patch(\"/users/{user_id}\")\nasync def update_user_endpoint(user_id: int, update: UserUpdate, db: AsyncSession = Depends(get_db)):\n    user = await update_user(db, user_id, update.model_dump(exclude_unset=True))\n    if not user:\n        raise HTTPException(status_code=404, detail=\"User not found\")\n    return user\n\n## DELETE\nasync def delete_user(db: AsyncSession, user_id: int) -> bool:\n    user = await get_user(db, user_id)\n    if not user:\n        return False\n    await db.delete(user)\n    await db.flush()\n    return True\n\n@app.delete(\"/users/{user_id}\", status_code=204)\nasync def delete_user_endpoint(user_id: int, db: AsyncSession = Depends(get_db)):\n    deleted = await delete_user(db, user_id)\n    if not deleted:\n        raise HTTPException(status_code=404, detail=\"User not found\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-relationships",
      children: "6.4 Relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQLAlchemy supports standard database relationships."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sqlalchemy import Table, Column, ForeignKey\nfrom sqlalchemy.orm import relationship\n\n## Many-to-many association table\npost_tags = Table(\n    \"post_tags\",\n    Base.metadata,\n    Column(\"post_id\", Integer, ForeignKey(\"posts.id\"), primary_key=True),\n    Column(\"tag_id\", Integer, ForeignKey(\"tags.id\"), primary_key=True),\n)\n\nclass Tag(Base):\n    __tablename__ = \"tags\"\n\n    id = Column(Integer, primary_key=True, index=True)\n    name = Column(String(50), unique=True, nullable=False)\n    posts = relationship(\"Post\", secondary=post_tags, back_populates=\"tags\")\n\n## Update Post model to include tags\nPost.tags = relationship(\"Tag\", secondary=post_tags, back_populates=\"posts\")\n\n## Eager loading vs lazy loading\n\n## Lazy (default) — loads on access, can cause N+1\n@app.get(\"/posts\")\nasync def list_posts_lazy(db: AsyncSession = Depends(get_db)):\n    result = await db.execute(select(Post))\n    posts = result.scalars().all()\n\n    for post in posts:\n        # Each access triggers a new query — N+1 problem!\n        print(post.author.username)\n    return posts\n\n## Eager loading — join in a single query\nfrom sqlalchemy.orm import joinedload\n\n@app.get(\"/posts\")\nasync def list_posts_eager(db: AsyncSession = Depends(get_db)):\n    result = await db.execute(\n        select(Post).options(joinedload(Post.author), joinedload(Post.tags))\n    )\n    posts = result.unique().scalars().all()\n    # No additional queries — author and tags loaded in join\n    return posts\n\n## Subquery loading (separate query, but batched)\nfrom sqlalchemy.orm import selectinload\n\n@app.get(\"/posts\")\nasync def list_posts_selectin(db: AsyncSession = Depends(get_db)):\n    result = await db.execute(\n        select(Post).options(selectinload(Post.author))\n    )\n    posts = result.scalars().all()\n    # Author loaded in second query with WHERE IN clause\n    return posts\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationship loading strategies"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queries"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lazy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "joinedload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single JOIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small datasets, few relations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectinload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate SELECT IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large datasets, many relations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "subqueryload"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subquery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex filtering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-alembic-migrations",
      children: "6.5 Alembic Migrations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alembic manages database schema changes over time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "\n## Installation\npip install alembic\n\n## Initialize\nalembic init alembic\n\n## Configure alembic/env.py to use your models\n\n## target_metadata = Base.metadata\n\n## Auto-generate migration\nalembic revision --autogenerate -m \"create users table\"\n\n## Apply migration\nalembic upgrade head\n\n## Rollback\nalembic downgrade -1\n\n## View history\nalembic history\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration file example"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\"\"\"Add user role column\n\nRevision ID: abc123\nRevises: def456\n\"\"\"\nfrom alembic import op\nimport sqlalchemy as sa\n\ndef upgrade():\n    op.add_column(\"users\", sa.Column(\"role\", sa.String(20), server_default=\"user\"))\n    op.create_index(\"idx_users_role\", \"users\", [\"role\"])\n\ndef downgrade():\n    op.drop_index(\"idx_users_role\")\n    op.drop_column(\"users\", \"role\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration best practices"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always review auto-generated migrations before applying"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test migrations on a staging database first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never edit existing migrations that have been applied to production"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "op.execute()"
        }), " for data migrations or complex SQL"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep migrations small and focused on single changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-repository-pattern",
      children: "6.6 Repository Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Abstract data access behind repository interfaces."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\nfrom sqlalchemy import select, delete as sa_delete\nfrom sqlalchemy.ext.asyncio import AsyncSession\n\nclass BaseRepository(ABC):\n    def __init__(self, db: AsyncSession):\n        self.db = db\n\nclass UserRepository(BaseRepository):\n    async def get_by_id(self, user_id: int) -> User | None:\n        result = await self.db.execute(select(User).where(User.id == user_id))\n        return result.scalar_one_or_none()\n\n    async def get_by_username(self, username: str) -> User | None:\n        result = await self.db.execute(select(User).where(User.username == username))\n        return result.scalar_one_or_none()\n\n    async def get_by_email(self, email: str) -> User | None:\n        result = await self.db.execute(select(User).where(User.email == email))\n        return result.scalar_one_or_none()\n\n    async def list(self, skip: int = 0, limit: int = 100) -> list[User]:\n        result = await self.db.execute(\n            select(User).offset(skip).limit(limit).order_by(User.id)\n        )\n        return result.scalars().all()\n\n    async def create(self, data: dict) -> User:\n        user = User(**data)\n        self.db.add(user)\n        await self.db.flush()\n        await self.db.refresh(user)\n        return user\n\n    async def update(self, user_id: int, data: dict) -> User | None:\n        user = await self.get_by_id(user_id)\n        if not user:\n            return None\n        for key, value in data.items():\n            setattr(user, key, value)\n        await self.db.flush()\n        await self.db.refresh(user)\n        return user\n\n    async def delete(self, user_id: int) -> bool:\n        user = await self.get_by_id(user_id)\n        if not user:\n            return False\n        await self.db.delete(user)\n        await self.db.flush()\n        return True\n\n## FastAPI integration — inject repository via dependency\nasync def get_user_repository(db: AsyncSession = Depends(get_db)) -> UserRepository:\n    return UserRepository(db)\n\n@app.get(\"/users/{user_id}\")\nasync def get_user(user_id: int, repo: UserRepository = Depends(get_user_repository)):\n    user = await repo.get_by_id(user_id)\n    if not user:\n        raise HTTPException(status_code=404, detail=\"User not found\")\n    return user\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository pattern benefits"
      }), ": Testable (mock repository in tests), swappable (change ORM without changing business logic), consistent data access patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "67-query-optimization",
      children: "6.7 Query Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sqlalchemy import text, func, desc\n\n## Raw SQL for complex queries\n@app.get(\"/users/stats\")\nasync def user_stats(db: AsyncSession = Depends(get_db)):\n    result = await db.execute(text(\"\"\"\n        SELECT\n            date_trunc('day', created_at) as day,\n            COUNT(*) as user_count,\n            COUNT(CASE WHEN is_active THEN 1 END) as active_count\n        FROM users\n        GROUP BY day\n        ORDER BY day DESC\n        LIMIT 30\n    \"\"\"))\n    return [dict(row._mapping) for row in result]\n\n## Aggregation with ORM\n@app.get(\"/posts/analytics\")\nasync def post_analytics(db: AsyncSession = Depends(get_db)):\n    result = await db.execute(\n        select(\n            Post.author_id,\n            func.count(Post.id).label(\"post_count\"),\n            func.avg(func.length(Post.content)).label(\"avg_length\")\n        ).group_by(Post.author_id)\n    )\n    return [dict(row._mapping) for row in result]\n\n## Pagination with keyset pagination (cursor)\n@app.get(\"/posts/cursor\")\nasync def list_posts_cursor(\n    cursor: Optional[int] = None,\n    limit: int = 20,\n    db: AsyncSession = Depends(get_db)\n):\n    query = select(Post).options(joinedload(Post.author)).order_by(Post.id)\n\n    if cursor:\n        query = query.where(Post.id > cursor)\n\n    query = query.limit(limit + 1)\n    result = await db.execute(query)\n    posts = result.unique().scalars().all()\n\n    has_more = len(posts) > limit\n    posts = posts[:limit]\n    next_cursor = posts[-1].id if has_more and posts else None\n\n    return {\"data\": posts, \"next_cursor\": next_cursor, \"has_more\": has_more}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization tips"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "selectinload"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "joinedload"
        }), " for collections"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add database indexes on foreign keys and frequently queried columns"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "limit"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "offset"
        }), " for pagination"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid N+1 queries by eager loading relationships"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "text()"
        }), " for complex, read-only SQL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Profile queries with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EXPLAIN ANALYZE"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "68-transactions",
      children: "6.8 Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from sqlalchemy.ext.asyncio import AsyncSession\n\n## Transaction via dependency — automatic commit/rollback\nasync def get_db() -> AsyncGenerator[AsyncSession, None]:\n    async with async_session_factory() as session:\n        try:\n            yield session\n            await session.commit()\n        except Exception:\n            await session.rollback()\n            raise\n\n## Multiple operations in one transaction\nasync def transfer_funds(\n    db: AsyncSession,\n    from_user_id: int,\n    to_user_id: int,\n    amount: float\n):\n    from_account = await account_repo.get_by_user_id(db, from_user_id)\n    to_account = await account_repo.get_by_user_id(db, to_user_id)\n\n    if from_account.balance < amount:\n        raise HTTPException(status_code=400, detail=\"Insufficient funds\")\n\n    from_account.balance -= amount\n    to_account.balance += amount\n\n    # Both updates are in the same transaction\n    # If anything fails, both are rolled back\n    await db.flush()\n\n## Manual transaction management\nasync def create_order_with_items(\n    db: AsyncSession,\n    order_data: dict,\n    items: list[dict]\n):\n    async with db.begin():  # Nested transaction\n        order = Order(**order_data)\n        db.add(order)\n        await db.flush()\n\n        for item_data in items:\n            item = OrderItem(order_id=order.id, **item_data)\n            db.add(item)\n\n        await db.flush()\n        await db.refresh(order)\n        return order\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PrismaClient } from \"@prisma/client\";\n\nconst prisma = new PrismaClient();\n\n// Equivalent CRUD with Prisma ORM\nasync function createUser(data: { name: string; email: string }) {\n  return prisma.user.create({ data });\n}\n\nasync function getUser(id: number) {\n  return prisma.user.findUnique({\n    where: { id },\n    include: { posts: true },\n  });\n}\n\nasync function listUsers(skip: number, limit: number) {\n  return prisma.user.findMany({ skip, take: limit, orderBy: { createdAt: \"desc\" } });\n}\n\n// Repository pattern in TypeScript\nclass UserRepository {\n  async findById(id: number) {\n    return prisma.user.findUnique({ where: { id } });\n  }\n\n  async findByEmail(email: string) {\n    return prisma.user.findUnique({ where: { email } });\n  }\n\n  async create(data: { name: string; email: string; password: string }) {\n    return prisma.user.create({ data });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQLAlchemy provides async ORM support with asyncpg for PostgreSQL in FastAPI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ORM models map Python classes to database tables with columns and relationships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CRUD operations follow create/read/update/delete patterns with session management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relationships (one-to-many, many-to-many) model data associations with foreign keys"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eager loading (joinedload, selectinload) prevents N+1 query problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alembic manages database schema migrations with version control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repository pattern abstracts data access behind interfaces for testability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connection pooling and query optimization improve database performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transactions ensure atomicity — all operations succeed or none do"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use async database drivers with FastAPI for non-blocking I/O"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Async API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "asyncpg + AsyncSession"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sync SQLite with asyncio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "selectinload for collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eager loading everything"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alembic auto-generate + review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual schema changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repository pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw SQL in route handlers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexes + query profiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring slow queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proper FK + relationship()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual join management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic commit/rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual transaction handling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s06-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q1: SQLAlchemy async vs sync — when to use which?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Async SQLAlchemy with asyncpg is recommended for FastAPI applications because FastAPI is async-native. Async prevents database calls from blocking the event loop, improving concurrency. Sync SQLAlchemy works but blocks the event loop — use async for production FastAPI apps. Sync is acceptable for simple scripts or tools."
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
      "data-qid": "fastapi-s06-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q2: What is the N+1 problem in ORMs?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "N+1 occurs when you query N parent records and each triggers an additional query for related data, totaling N+1 queries. Example: fetching 100 posts and then accessing each post's author triggers 101 queries. Solution: use eager loading (joinedload, selectinload) to fetch related data in fewer queries."
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
      "data-qid": "fastapi-s06-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q3: How does Alembic detect schema changes?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Alembic compares the current database state against the SQLAlchemy model metadata (Base.metadata). It detects added/removed tables, columns, indexes, and foreign keys. Auto-generated migrations should always be reviewed — Alembic may miss complex changes like rename operations or data migrations."
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
      "data-qid": "fastapi-s06-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q4: What is the repository pattern and why use it?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Repository pattern abstracts data access behind an interface. Benefits: separates business logic from ORM details, makes testing easier (mock repositories), enables database changes without affecting business code, and provides consistent data access patterns. Each entity typically has its own repository class."
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
      "data-qid": "fastapi-s06-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q5: How do you handle database migrations in production?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-content",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Run migrations as part of deployment: alembic upgrade head before starting the new application version. Use zero-downtime patterns: add nullable columns first, backfill data, then add constraints. Always test migrations on staging first. Have a rollback plan (alembic downgrade)."
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
      "data-qid": "fastapi-s06-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q6: How do you prevent SQL injection with SQLAlchemy?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "SQLAlchemy ORM queries are automatically parameterized — no SQL injection risk when using the ORM or SQLAlchemy Core with bind parameters. Only use text() for raw SQL and always pass parameters as bind arguments: text(\"SELECT * FROM users WHERE id = :id\").bindparams(id=user_id). Never use string formatting with raw SQL."
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
      "data-qid": "fastapi-s06-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q7: What is the difference between flush and commit?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "flush() synchronizes changes to the database within the current transaction — it assigns IDs and runs constraints but does NOT finalize the transaction. commit() finalizes the transaction (writes to disk). flush() is useful for getting generated IDs before commit. rollback() reverts all uncommitted changes."
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
      "data-qid": "fastapi-s06-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q8: How do you optimize slow SQLAlchemy queries?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Enable echo=True on engine to see queries. Use selectinload for collections, add indexes on foreign keys and WHERE columns, use limit/offset for pagination, avoid N+1 with eager loading, use raw SQL with text() for complex analytics, and profile with EXPLAIN ANALYZE."
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
      "data-qid": "fastapi-s06-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q9: How do you model many-to-many relationships?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an association table with foreign keys to both related tables. Define the relationship on both models with secondary= pointing to the association table. Example: Post and Tag with a post_tags table. Use selectinload(Post.tags) to eagerly load tags to avoid N+1."
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
      "data-qid": "fastapi-s06-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), " Q10: How do you handle connection pooling in SQLAlchemy?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure pool_size and max_overflow in create_engine. pool_size is the number of persistent connections, max_overflow is additional connections allowed under load. Monitor connection usage with database tools. Use pool_pre_ping=True to verify connections are alive before using them. Close sessions properly with the generator pattern."
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
      }), ": Which SQLAlchemy loading strategy prevents N+1 queries?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) lazy\nb) joinedload\nc) dynamic\nd) passive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s06-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) joinedload"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What command applies Alembic migrations?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) alembic migrate\nb) alembic apply\nc) alembic upgrade\nd) alembic run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s06-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) alembic upgrade"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": What pattern abstracts data access behind an interface?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) Factory\nb) Singleton\nc) Repository\nd) Adapter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s06-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) Repository"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": Which SQLAlchemy method assigns IDs without finalizing a transaction?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) commit()\nb) flush()\nc) refresh()\nd) save()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s06-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) flush()"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is the recommended async PostgreSQL driver for SQLAlchemy?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) psycopg2\nb) asyncpg\nc) pg8000\nd) sqlite"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "fastapi-s06-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) asyncpg"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Set up SQLAlchemy with SQLite. Define a User model with id, username, email, and created_at. Implement CRUD endpoints in FastAPI using the async pattern."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create models for Blog with User, Post, and Comment. User has many Posts, Post has many Comments. Add proper relationships, foreign keys, and indexes. Implement endpoints that eager load related data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Add Alembic migrations to the blog project. Create at least 3 migrations: initial schema, add a published_date column to posts, add a tags table with many-to-many relationship."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement the repository pattern for all models in the blog project. Create base repository with common methods, then specific repositories for User, Post, Comment, and Tag. Use dependency injection to provide repositories to endpoints."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a paginated search API with SQLAlchemy: implement cursor-based pagination, full-text search across posts and comments, filtering by date range and tags, and sorting by relevance or date. Optimize with proper indexes."]
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
            children: "Explain the core idea of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Database with SQLAlchemy — ORM, Migrations, and Repository Pattern."
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
            children: "Describe a production bug caused by misunderstanding Database with SQLAlchemy — ORM, Migrations, and Repository Pattern. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Database with SQLAlchemy — ORM, Migrations, and Repository Pattern from 10 users to 10 million?"
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
            children: "Compare Database with SQLAlchemy — ORM, Migrations, and Repository Pattern with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Database with SQLAlchemy — ORM, Migrations, and Repository Pattern."
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
            children: "How does Database with SQLAlchemy — ORM, Migrations, and Repository Pattern behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Database with SQLAlchemy — ORM, Migrations, and Repository Pattern explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Database with SQLAlchemy — ORM, Migrations, and Repository Pattern\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Database with SQLAlchemy — ORM, Migrations, and Repository Pattern to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Database with SQLAlchemy — ORM, Migrations, and Repository Pattern (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Database with SQLAlchemy — ORM, Migrations, and Repository Pattern-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Database with SQLAlchemy — ORM, Migrations, and Repository Pattern interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Database with SQLAlchemy — ORM, Migrations, and Repository Pattern in production today?"
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
        }), " Database with SQLAlchemy — ORM, Migrations, and Repository Pattern builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Database with SQLAlchemy — ORM, Migrations, and Repository Pattern before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Database with SQLAlchemy — ORM, Migrations, and Repository Pattern in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Database with SQLAlchemy — ORM, Migrations, and Repository Pattern chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Database with SQLAlchemy — ORM, Migrations, and Repository Pattern issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Database with SQLAlchemy — ORM, Migrations, and Repository Pattern in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Database with SQLAlchemy — ORM, Migrations, and Repository Pattern that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Database with SQLAlchemy — ORM, Migrations, and Repository Pattern in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Database with SQLAlchemy — ORM, Migrations, and Repository Pattern and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern on an empty input?"
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
            children: "Complete Medium exercises, explain Database with SQLAlchemy — ORM, Migrations, and Repository Pattern to someone else"
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
        children: "Always write a one-line example of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Database with SQLAlchemy — ORM, Migrations, and Repository Pattern when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Database with SQLAlchemy — ORM, Migrations, and Repository Pattern twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Database with SQLAlchemy — ORM, Migrations, and Repository Pattern snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Database with SQLAlchemy — ORM, Migrations, and Repository Pattern to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Database with SQLAlchemy — ORM, Migrations, and Repository Pattern to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on Database with SQLAlchemy — ORM, Migrations, and Repository Pattern (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real Database with SQLAlchemy — ORM, Migrations, and Repository Pattern problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements Database with SQLAlchemy — ORM, Migrations, and Repository Pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for Database with SQLAlchemy — ORM, Migrations, and Repository Pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on Database with SQLAlchemy — ORM, Migrations, and Repository Pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how Database with SQLAlchemy — ORM, Migrations, and Repository Pattern fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is Database with SQLAlchemy — ORM, Migrations, and Repository Pattern asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Database with SQLAlchemy — ORM, Migrations, and Repository Pattern."
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
        children: "Database with SQLAlchemy — ORM, Migrations, and Repository Pattern emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Database with SQLAlchemy — ORM, Migrations, and Repository Pattern today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Database with SQLAlchemy — ORM, Migrations, and Repository Pattern — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Database with SQLAlchemy — ORM, Migrations, and Repository Pattern changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing Database with SQLAlchemy — ORM, Migrations, and Repository Pattern."
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
        children: "Database with SQLAlchemy — ORM, Migrations, and Repository Pattern appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding Database with SQLAlchemy — ORM, Migrations, and Repository Pattern helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the Database with SQLAlchemy — ORM, Migrations, and Repository Pattern concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, Database with SQLAlchemy — ORM, Migrations, and Repository Pattern skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply Database with SQLAlchemy — ORM, Migrations, and Repository Pattern to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is like a recipe"
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
        }), " — this chapter contributes the Database with SQLAlchemy — ORM, Migrations, and Repository Pattern skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-06databasewithsqlalchemy-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which SQLAlchemy loading strategy prevents N+1 queries?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) joinedload"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-06databasewithsqlalchemy-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What command applies Alembic migrations?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) alembic upgrade"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-06databasewithsqlalchemy-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What pattern abstracts data access behind an interface?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "c) Repository"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-06databasewithsqlalchemy-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which SQLAlchemy method assigns IDs without finalizing a transaction?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) flush()"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "05fastapibackend-06databasewithsqlalchemy-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the recommended async PostgreSQL driver for SQLAlchemy?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) asyncpg"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Database with SQLAlchemy — ORM, Migrations, and Repository Pattern (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Database with SQLAlchemy — ORM, Migrations, and Repository Pattern (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Database with SQLAlchemy — ORM, Migrations, and Repository Pattern-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Database with SQLAlchemy — ORM, Migrations, and Repository Pattern in production at scale"
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
        children: "Testing: pytest for unit tests of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on Database with SQLAlchemy — ORM, Migrations, and Repository Pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in Database with SQLAlchemy — ORM, Migrations, and Repository Pattern code."]
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
        }), " or your IDE's debugger to step through the Database with SQLAlchemy — ORM, Migrations, and Repository Pattern example code."]
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
        children: "Explain Database with SQLAlchemy — ORM, Migrations, and Repository Pattern in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern."
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
        children: "Tell me about a time you debugged a Database with SQLAlchemy — ORM, Migrations, and Repository Pattern problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Database with SQLAlchemy — ORM, Migrations, and Repository Pattern is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Database with SQLAlchemy — ORM, Migrations, and Repository Pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Database with SQLAlchemy — ORM, Migrations, and Repository Pattern logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain Database with SQLAlchemy — ORM, Migrations, and Repository Pattern without notes"
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
        }), ": a small team uses Database with SQLAlchemy — ORM, Migrations, and Repository Pattern daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": Database with SQLAlchemy — ORM, Migrations, and Repository Pattern patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": Database with SQLAlchemy — ORM, Migrations, and Repository Pattern principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": Database with SQLAlchemy — ORM, Migrations, and Repository Pattern shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect Database with SQLAlchemy — ORM, Migrations, and Repository Pattern to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/07-async-patterns",
        children: "Async Patterns — Concurrency, Background Tasks, and Event-Driven Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database with SQLAlchemy — ORM, Migrations, and Repository Pattern, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Database with SQLAlchemy — ORM, Migrations, and Repository Pattern depends on input size and distribution — always benchmark for your own data."
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