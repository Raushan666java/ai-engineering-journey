"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[89544],{

/***/ 62473
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_15_nextjs_md_2a5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-15-nextjs-md-2a5.json
const site_docs_courses_web_development_15_nextjs_md_2a5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/15-nextjs","title":"Chapter 15: Next.js","description":"Previous 16-testing-web","source":"@site/docs/courses/web-development/15-nextjs.md","sourceDirName":"courses/web-development","slug":"/web-development/15-nextjs","permalink":"/ai-engineering-journey/web-development/15-nextjs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-nextjs","slug":"/web-development/15-nextjs","title":"Chapter 15: Next.js","sidebar_label":"Chapter 15: Next.js","sidebar_position":15},"sidebar":"course-web-development","previous":{"title":"Chapter 14: TypeScript","permalink":"/ai-engineering-journey/web-development/14-typescript"},"next":{"title":"Chapter 16: Testing","permalink":"/ai-engineering-journey/web-development/16-testing-web"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/15-nextjs.md


const frontMatter = {
	id: '15-nextjs',
	slug: '/web-development/15-nextjs',
	title: 'Chapter 15: Next.js',
	sidebar_label: 'Chapter 15: Next.js',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: Next.js';

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
  "value": "15.1 App Router vs Pages Router",
  "id": "151-app-router-vs-pages-router",
  "level": 2
}, {
  "value": "15.2 Rendering Strategies",
  "id": "152-rendering-strategies",
  "level": 2
}, {
  "value": "15.3 Data Fetching Patterns",
  "id": "153-data-fetching-patterns",
  "level": 2
}, {
  "value": "15.4 API Routes",
  "id": "154-api-routes",
  "level": 2
}, {
  "value": "15.5 Middleware",
  "id": "155-middleware",
  "level": 2
}, {
  "value": "15.6 SEO and Metadata",
  "id": "156-seo-and-metadata",
  "level": 2
}, {
  "value": "15.7 Error Handling and Loading States",
  "id": "157-error-handling-and-loading-states",
  "level": 2
}, {
  "value": "Route Groups and Parallel Routes",
  "id": "route-groups-and-parallel-routes",
  "level": 3
}, {
  "value": "15.8 Image and Font Optimization",
  "id": "158-image-and-font-optimization",
  "level": 2
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
  "value": "TypeScript: Next.js SSR/SSG Comparator &amp; Middleware Builder",
  "id": "typescript-nextjs-ssrssg-comparator--middleware-builder",
  "level": 3
}, {
  "value": "TypeScript Implementation: SSG/SSR Data Flow Simulator, Dynamic Route Builder, Middleware Chain",
  "id": "typescript-implementation-ssgssr-data-flow-simulator-dynamic-route-builder-middleware-chain",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Server Actions Deep Dive",
  "id": "server-actions-deep-dive",
  "level": 3
}, {
  "value": "Caching Deep Dive",
  "id": "caching-deep-dive",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Projects",
  "id": "application-projects",
  "level": 3
}, {
  "value": "Challenge Project",
  "id": "challenge-project",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
        id: "chapter-15-nextjs",
        children: "Chapter 15: Next.js"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/14-typescript",
          children: "14-typescript"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/16-testing-web",
          children: "16-testing-web"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Next.js App Router uses file-based routing with nested layouts that persist across navigations."]
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
        href: "../../assets/images/lessons/web-development/15-nextjs/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/15-nextjs/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/15-nextjs/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/15-nextjs/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/15-nextjs/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/15-nextjs/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Next.js supports SSR, SSG, ISR, and client-side rendering — choose based on data freshness needs."]
      }), "\n"]
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
            children: "App Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File-based routing with nested layouts, loading states, error boundaries"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "layout.tsx"
            }), " for persistent UI (navbars, sidebars), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "page.tsx"
            }), " for route content"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rendering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSR, SSG, ISR, and client rendering serve different use cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default to SSG/ISR for public content, SSR for personalized pages, client for highly interactive UI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Fetching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server Components fetch directly; client components use SWR/React Query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fetch in Server Components by default to eliminate client waterfalls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Routes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Route handlers in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/*"
            }), " replace separate backend servers"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for lightweight BFF (Backend for Frontend) patterns, not for full API backends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge functions that intercept requests before they reach routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for auth checks, redirects, i18n — but keep logic minimal for low latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata API, sitemaps, and Open Graph tags improve search visibility"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Generate metadata dynamically in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "generateMetadata"
            }), " for each page"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Server Components fetch data on the server, reducing client JavaScript bundle size."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[App Router vs Pages Router]\n    B[Nested Layouts]\n    A --> B\n    C[SSR, SSG, ISR & Client Rendering]\n    B --> C\n    D[Server Components]\n    C --> D\n    E[Data Fetching Patterns]\n    D --> E\n    F[API Route Handlers]\n    E --> F\n    G[Middleware]\n    F --> G\n    H[SEO & Metadata]\n    G --> H\n    I[Image & Font Optimization]\n    H --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up a Next.js project with App Router"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement SSR, SSG, ISR, and client-side rendering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create API routes and middleware"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize images, fonts, and metadata for SEO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement dynamic imports and code splitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy Next.js applications to production"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "151-app-router-vs-pages-router",
      children: "15.1 App Router vs Pages Router"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " API Routes in the App Router replace separate backend servers for lightweight use cases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/15-nextjs.png",
        alt: "Next.js Rendering Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// App Router (Next.js 13+) - file-based routing with layouts\n// app/page.tsx       -> /\n// app/about/page.tsx -> /about\n// app/blog/[slug]/page.tsx -> /blog/hello-world\n// app/api/tasks/route.ts -> /api/tasks\n\n// Layouts persist across navigations\n// app/layout.tsx\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang=\"en\">\n      <body>\n        <Navbar />\n        <main>{children}</main>\n        <Footer />\n      </body>\n    </html>\n  );\n}\n\n// Nested layout\n// app/dashboard/layout.tsx\nexport default function DashboardLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <section>\n      <Sidebar />\n      {children}\n    </section>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "152-rendering-strategies",
      children: "15.2 Rendering Strategies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Middleware runs at the edge, intercepting requests for auth checks, redirects, and rewrites."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Static Site Generation (SSG) - default, builds at compile time\n// app/about/page.tsx\nexport default function AboutPage() {\n  return <h1>About Us</h1>; // Pre-rendered at build time\n}\n\n// Server-Side Rendering (SSR) - renders on each request\n// app/profile/page.tsx\nexport default async function ProfilePage() {\n  const data = await fetch(\"https://api.example.com/profile\");\n  const profile = await data.json();\n  return <Profile {...profile} />; // Rendered per request\n}\nexport const dynamic = \"force-dynamic\";\n\n// Incremental Static Regeneration (ISR) - static + revalidation\n// app/blog/[slug]/page.tsx\ninterface Props {\n  params: { slug: string };\n}\n\nasync function getPost(slug: string) {\n  const res = await fetch(`https://api.example.com/posts/${slug}`, {\n    next: { revalidate: 3600 }, // Revalidate every hour\n  });\n  return res.json();\n}\n\nexport default async function BlogPost({ params }: Props) {\n  const post = await getPost(params.slug);\n  return (\n    <article>\n      <h1>{post.title}</h1>\n      <div>{post.content}</div>\n    </article>\n  );\n}\n\n// Generate static params for ISR\nexport async function generateStaticParams() {\n  const posts = await fetch(\"https://api.example.com/posts\").then((r) => r.json());\n  return posts.map((post: any) => ({ slug: post.slug }));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "153-data-fetching-patterns",
      children: "15.3 Data Fetching Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Next.js provides built-in image optimization, font loading, and SEO metadata management."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Server component - fetch directly\nasync function getPosts() {\n  const res = await fetch(\"https://api.example.com/posts\");\n  if (!res.ok) throw new Error(\"Failed to fetch\");\n  return res.json();\n}\n\nexport default async function PostsPage() {\n  const posts = await getPosts();\n  return (\n    <ul>\n      {posts.map((post: any) => (\n        <li key={post.id}>{post.title}</li>\n      ))}\n    </ul>\n  );\n}\n\n// Client component with SWR\n\"use client\";\nimport useSWR from \"swr\";\n\nconst fetcher = (url: string) => fetch(url).then((r) => r.json());\n\nfunction UserProfile({ userId }: { userId: string }) {\n  const { data, error, isLoading } = useSWR(\n    `/api/users/${userId}`,\n    fetcher,\n    { revalidateOnFocus: false }\n  );\n\n  if (isLoading) return <div>Loading...</div>;\n  if (error) return <div>Error loading user</div>;\n  return <div>{data.name}</div>;\n}\n\n// Parallel data fetching\nexport default async function Dashboard() {\n  const [user, projects, tasks] = await Promise.all([\n    fetch(\"/api/user\").then((r) => r.json()),\n    fetch(\"/api/projects\").then((r) => r.json()),\n    fetch(\"/api/tasks\").then((r) => r.json()),\n  ]);\n\n  return <DashboardView user={user} projects={projects} tasks={tasks} />;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "154-api-routes",
      children: "15.4 API Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// app/api/tasks/route.ts\nimport { NextRequest, NextResponse } from \"next/server\";\n\n// GET /api/tasks\nexport async function GET(request: NextRequest) {\n  const searchParams = request.nextUrl.searchParams;\n  const page = parseInt(searchParams.get(\"page\") ?? \"1\");\n  const limit = parseInt(searchParams.get(\"limit\") ?? \"20\");\n\n  const tasks = await prisma.task.findMany({\n    skip: (page - 1) * limit,\n    take: limit,\n  });\n  const total = await prisma.task.count();\n\n  return NextResponse.json({ data: tasks, total, page, limit });\n}\n\n// POST /api/tasks\nexport async function POST(request: NextRequest) {\n  const body = await request.json();\n  const task = await prisma.task.create({ data: body });\n  return NextResponse.json({ data: task }, { status: 201 });\n}\n\n// Dynamic route: app/api/tasks/[id]/route.ts\nexport async function PUT(\n  request: NextRequest,\n  { params }: { params: { id: string } }\n) {\n  const body = await request.json();\n  const task = await prisma.task.update({\n    where: { id: params.id },\n    data: body,\n  });\n  return NextResponse.json({ data: task });\n}\n\nexport async function DELETE(\n  _request: NextRequest,\n  { params }: { params: { id: string } }\n) {\n  await prisma.task.delete({ where: { id: params.id } });\n  return new NextResponse(null, { status: 204 });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "155-middleware",
      children: "15.5 Middleware"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// middleware.ts\nimport { NextResponse } from \"next/server\";\nimport type { NextRequest } from \"next/server\";\n\nexport function middleware(request: NextRequest) {\n  const token = request.cookies.get(\"session\")?.value;\n  const isAuthPage = request.nextUrl.pathname.startsWith(\"/login\") ||\n    request.nextUrl.pathname.startsWith(\"/register\");\n  const isApiAuth = request.nextUrl.pathname.startsWith(\"/api/auth\");\n\n  // Redirect to login if not authenticated\n  if (!token && !isAuthPage && !isApiAuth) {\n    return NextResponse.redirect(new URL(\"/login\", request.url));\n  }\n\n  // Redirect to dashboard if already authenticated\n  if (token && isAuthPage) {\n    return NextResponse.redirect(new URL(\"/dashboard\", request.url));\n  }\n\n  return NextResponse.next();\n}\n\nexport const config = {\n  matcher: [\"/dashboard/:path*\", \"/api/protected/:path*\", \"/login\", \"/register\"],\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "156-seo-and-metadata",
      children: "15.6 SEO and Metadata"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// app/blog/[slug]/page.tsx\nimport { Metadata } from \"next\";\n\ninterface Props {\n  params: { slug: string };\n}\n\nexport async function generateMetadata({ params }: Props): Promise<Metadata> {\n  const post = await getPost(params.slug);\n  return {\n    title: post.title,\n    description: post.excerpt,\n    openGraph: {\n      title: post.title,\n      description: post.excerpt,\n      type: \"article\",\n      publishedTime: post.createdAt,\n      authors: [post.author.name],\n      images: [{ url: post.coverImage }],\n    },\n    twitter: {\n      card: \"summary_large_image\",\n      title: post.title,\n      description: post.excerpt,\n    },\n    alternates: {\n      canonical: `/blog/${params.slug}`,\n    },\n  };\n}\n\n// app/sitemap.ts\nexport default async function sitemap() {\n  const posts = await getPosts();\n  const postUrls = posts.map((post: any) => ({\n    url: `https://example.com/blog/${post.slug}`,\n    lastModified: post.updatedAt,\n    changeFrequency: \"weekly\" as const,\n    priority: 0.8,\n  }));\n\n  return [\n    { url: \"https://example.com\", lastModified: new Date(), priority: 1.0 },\n    { url: \"https://example.com/about\", priority: 0.5 },\n    ...postUrls,\n  ];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "157-error-handling-and-loading-states",
      children: "15.7 Error Handling and Loading States"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// app/dashboard/error.tsx\n\"use client\";\n\nexport default function Error({\n  error,\n  reset,\n}: {\n  error: Error & { digest?: string };\n  reset: () => void;\n}) {\n  return (\n    <div className=\"error-container\">\n      <h2>Something went wrong!</h2>\n      <p>{error.message}</p>\n      <button onClick={() => reset()}>Try again</button>\n    </div>\n  );\n}\n\n// app/dashboard/loading.tsx\nexport default function Loading() {\n  return (\n    <div className=\"loading-skeleton\">\n      <div className=\"skeleton-header\" />\n      <div className=\"skeleton-content\">\n        {Array.from({ length: 3 }).map((_, i) => (\n          <div key={i} className=\"skeleton-card\" />\n        ))}\n      </div>\n    </div>\n  );\n}\n\n// app/dashboard/not-found.tsx\nimport Link from \"next/link\";\n\nexport default function NotFound() {\n  return (\n    <div>\n      <h2>Page Not Found</h2>\n      <p>Could not find the requested dashboard page.</p>\n      <Link href=\"/dashboard\">Return to Dashboard</Link>\n    </div>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "route-groups-and-parallel-routes",
      children: "Route Groups and Parallel Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Route groups organize routes without affecting URL structure\n// app/(marketing)/about/page.tsx -> /about\n// app/(marketing)/pricing/page.tsx -> /pricing\n// app/(dashboard)/dashboard/page.tsx -> /dashboard\n\n// Parallel routes render multiple pages in the same layout\n// app/dashboard/@analytics/page.tsx\n// app/dashboard/@tasks/page.tsx\n\n// app/dashboard/layout.tsx\nexport default function DashboardLayout({\n  children,\n  analytics,\n  tasks,\n}: {\n  children: React.ReactNode;\n  analytics: React.ReactNode;\n  tasks: React.ReactNode;\n}) {\n  return (\n    <div className=\"dashboard-grid\">\n      <main>{children}</main>\n      <aside>{analytics}</aside>\n      <aside>{tasks}</aside>\n    </div>\n  );\n}\n\n// Intercepting routes for modal patterns\n// app/feed/page.tsx -> /feed\n// app/feed/(..)photo/[id]/page.tsx -> Intercepts /photo/123 from /feed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "158-image-and-font-optimization",
      children: "15.8 Image and Font Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Image optimization with next/image\nimport Image from \"next/image\";\n\nexport default function Profile() {\n  return (\n    <Image\n      src=\"/avatar.jpg\"\n      alt=\"Profile picture\"\n      width={200}\n      height={200}\n      priority // Load with high priority for above-the-fold\n      placeholder=\"blur\"\n      blurDataURL=\"data:image/jpeg;base64,...\"\n      sizes=\"(max-width: 768px) 100vw, 200px\"\n      quality={85}\n    />\n  );\n}\n\n// Remote images - configure in next.config.js\n// next.config.ts\nimport type { NextConfig } from \"next\";\n\nconst nextConfig: NextConfig = {\n  images: {\n    remotePatterns: [\n      {\n        protocol: \"https\",\n        hostname: \"images.example.com\",\n        pathname: \"/uploads/**\",\n      },\n    ],\n  },\n};\n\nexport default nextConfig;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "next: { revalidate: 3600 }"
        }), " in fetch options for ISR — it gives you static speed with periodic content freshness without deploying."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\nPrefetch all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Link"
        }), " components by default in App Router. Disable prefetch for non-critical links with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prefetch={false}"
        }), " to save bandwidth."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!REMEMBER]\nServer Components cannot use hooks (", (0,jsx_runtime.jsx)(_components.code, {
          children: "useState"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useEffect"
        }), ") or browser APIs. Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'use client'"
        }), " at the top of any file that needs interactivity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSR vs SSG vs ISR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renders per request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Builds once at build time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server vs Client Component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renders on server, no JS sent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renders on client, full JS bundle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "App Router vs Pages Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested layouts, RSC, file-based API routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Based on React component per page, getServerSideProps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Handler vs API route"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs in edge runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs in Node.js runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "next/image vs img"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-webp, lazy load, responsive, blur placeholder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual optimization needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Conventions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "layout.tsx"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "page.tsx"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "loading.tsx"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "error.tsx"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "not-found.tsx"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "route.tsx"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rendering Methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "force-dynamic"
            }), " (SSR), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "revalidate"
            }), " (ISR), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "generateStaticParams"
            }), " (SSG)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Fetching"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fetch()"
            }), " in Server Components, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "useSWR"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "useQuery"
            }), " in Client Components"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "export const metadata"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "generateMetadata()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "generateStaticParams()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Middleware Matcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "export const config = { matcher: ['/protected/:path*'] }"
            })
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
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Marketing Site"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSG with ISR for content pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast load times with periodic content updates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSR for authenticated dashboard, SSG for landing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personalized data with fast public pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISR with on-demand revalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant publish with CDN-cached posts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISR for product pages, SSR for cart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fresh inventory with fast product browsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admin Panel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side rendering with SWR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich interactivity with real-time data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these quick questions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. What is the difference between SSR and ISR?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) SSR renders on every request; ISR renders at build time then revalidates periodically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ISR is faster than SSR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) SSR is for static sites"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) ISR requires a database"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A) SSR (Server-Side Rendering) generates HTML for every request. ISR (Incremental Static Regeneration) pre-builds static pages and revalidates them after a configured time period."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "layout.tsx"
        }), " in the App Router?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To define the page content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To create persistent UI (navbars, sidebars) that do not remount on navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To configure build settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To define API routes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Layouts wrap page content and persist across navigations, preventing remounting of shared UI elements like navbars, sidebars, and footers."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. Why should you prefer Server Components for data fetching?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) They are easier to write"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) They fetch data on the server, reducing client bundle size and eliminating client waterfalls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) They support all React hooks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) They render faster on the client"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Server Components fetch data during server rendering, so no client JavaScript is needed for data fetching. This reduces bundle size and eliminates the request waterfall effect common in client-side fetching."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q4. When would you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "force-dynamic"
        }), " on a page?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) When the page should be statically generated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) When the page needs fresh data on every request (personalized content)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) When the page has images"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) When the page uses TypeScript"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "force-dynamic"
            }), " opts a page into SSR (server-side rendering on every request), which is necessary for pages that display user-specific or frequently changing data that cannot be cached."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-nextjs-ssrssg-comparator--middleware-builder",
      children: "TypeScript: Next.js SSR/SSG Comparator & Middleware Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RenderingStrategy {\n  static compare(strategy: \"ssr\" | \"ssg\" | \"isr\" | \"csr\"): { dataAge: string; freshPerRequest: boolean; cached: boolean; revalidate?: number } {\n    const configs = {\n      ssr: { dataAge: \"Request time\", freshPerRequest: true, cached: false },\n      ssg: { dataAge: \"Build time\", freshPerRequest: false, cached: true },\n      isr: { dataAge: \"Build time + revalidate\", freshPerRequest: false, cached: true, revalidate: 60 },\n      csr: { dataAge: \"Client render time\", freshPerRequest: true, cached: false },\n    };\n    return configs[strategy];\n  }\n  static recommend(pages: Array<{ path: string; updateFreq: string; userSpecific: boolean }>): Record<string, string> {\n    const recommendations: Record<string, string> = {};\n    pages.forEach(p => {\n      if (p.userSpecific) recommendations[p.path] = \"SSR\";\n      else if (p.updateFreq === \"never\") recommendations[p.path] = \"SSG\";\n      else recommendations[p.path] = \"ISR (revalidate: 60)\";\n    });\n    return recommendations;\n  }\n}\n\nclass MiddlewareBuilder {\n  static createRedirect(from: string, to: string, permanent: boolean = false): Record<string, any> {\n    return { source: from, destination: to, permanent };\n  }\n  static createRewrite(from: string, to: string): Record<string, any> {\n    return { source: from, destination: to };\n  }\n  static header(source: string, headers: Record<string, string>): Record<string, any> {\n    return { source, headers: Object.entries(headers).map(([k, v]) => ({ key: k, value: v })) };\n  }\n}\n\nclass ServerActionBuilder {\n  static create<T>(name: string, fn: (data: T) => Promise<Record<string, any>>): string {\n    return `\"use server\";\n\nexport async function ${name}(formData: FormData) {\n  const data = Object.fromEntries(formData) as unknown as T;\n  return JSON.stringify(await fn(data));\n}`;\n  }\n}\n\nconsole.log(\"Strategy:\", RenderingStrategy.compare(\"isr\"));\nconsole.log(\"Recommend:\", RenderingStrategy.recommend([{ path: \"/dashboard\", updateFreq: \"daily\", userSpecific: true }]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-ssgssr-data-flow-simulator-dynamic-route-builder-middleware-chain",
      children: "TypeScript Implementation: SSG/SSR Data Flow Simulator, Dynamic Route Builder, Middleware Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type RenderStrategy = \"ssg\" | \"ssr\" | \"isr\" | \"csr\";\n\ninterface PageConfig {\n    path: string;\n    strategy: RenderStrategy;\n    revalidate?: number;\n    dynamicParams?: boolean;\n    generateStaticParams?: () => Record<string, string>[];\n}\n\nclass RenderingStrategyEngine {\n    static simulate(config: PageConfig): { html: string; timestamp: number; strategy: string; cacheHeaders: string } {\n        const now = Date.now();\n        let html: string;\n        let cacheHeaders: string;\n\n        switch (config.strategy) {\n            case \"ssg\":\n                html = `<!-- SSG: built at build time --><html><body><h1>${config.path}</h1><p>Generated: ${new Date(now).toISOString()}</p></body></html>`;\n                cacheHeaders = \"public, max-age=31536000, immutable\";\n                break;\n            case \"ssr\":\n                html = `<!-- SSR: rendered per request --><html><body><h1>${config.path}</h1><p>Rendered: ${new Date(now).toISOString()}</p></body></html>`;\n                cacheHeaders = \"no-cache, no-store, must-revalidate\";\n                break;\n            case \"isr\":\n                html = `<!-- ISR: revalidated every ${config.revalidate || 60}s --><html><body><h1>${config.path}</h1><p>Generated: ${new Date(now).toISOString()}</p></body></html>`;\n                cacheHeaders = `public, s-maxage=${config.revalidate || 60}, stale-while-revalidate=${(config.revalidate || 60) * 10}`;\n                break;\n            case \"csr\":\n                html = `<!-- CSR: shell only, hydrate client-side --><html><body><div id=\"root\"></div><script src=\"bundle.js\"></script></body></html>`;\n                cacheHeaders = \"public, max-age=0, must-revalidate\";\n                break;\n            default:\n                html = \"\";\n                cacheHeaders = \"\";\n        }\n\n        return { html, timestamp: now, strategy: config.strategy, cacheHeaders };\n    }\n\n    static recommend(path: string, updateFreq: \"realtime\" | \"daily\" | \"weekly\" | \"static\", userSpecific: boolean): PageConfig {\n        let strategy: RenderStrategy;\n        let revalidate: number | undefined;\n\n        if (userSpecific) {\n            strategy = \"ssr\";\n        } else if (updateFreq === \"realtime\") {\n            strategy = \"ssr\";\n        } else if (updateFreq === \"daily\") {\n            strategy = \"isr\";\n            revalidate = 86400;\n        } else if (updateFreq === \"weekly\") {\n            strategy = \"isr\";\n            revalidate = 604800;\n        } else {\n            strategy = \"ssg\";\n        }\n\n        return { path, strategy, revalidate, generateStaticParams: strategy === \"ssg\" ? () => [] : undefined };\n    }\n}\n\nclass DynamicRoutePathBuilder {\n    static build(pattern: string, params: Record<string, string>): string {\n        let path = pattern;\n        for (const [key, value] of Object.entries(params)) {\n            path = path.replace(`[${key}]`, value);\n            path = path.replace(`[...${key}]`, value);\n        }\n        path = path.replace(/\\[\\[\\.\\.\\.[^\\]]+\\]\\]/g, \"\");\n        return path;\n    }\n\n    static match(pattern: string, url: string): Record<string, string> | null {\n        const patternParts = pattern.split(\"/\").filter(Boolean);\n        const urlParts = url.split(\"/\").filter(Boolean);\n        if (patternParts.length !== urlParts.length) return null;\n\n        const params: Record<string, string> = {};\n        for (let i = 0; i < patternParts.length; i++) {\n            if (patternParts[i].startsWith(\"[...\") || patternParts[i].startsWith(\"[[...\")) {\n                const key = patternParts[i].replace(/[[\\].]/g, \"\");\n                params[key] = urlParts.slice(i).join(\"/\");\n                return params;\n            }\n            if (patternParts[i].startsWith(\"[\") && patternParts[i].endsWith(\"]\")) {\n                const key = patternParts[i].replace(/[[\\]]/g, \"\").split(\"?\")[0];\n                params[key] = urlParts[i];\n            } else if (patternParts[i] !== urlParts[i]) {\n                return null;\n            }\n        }\n        return params;\n    }\n\n    static sitemap(routes: string[]): string {\n        return `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\\n${\n            routes.map(r => `  <url><loc>https://example.com${r}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`).join(\"\\n\")\n        }\\n</urlset>`;\n    }\n}\n\nclass NextJSMiddlewareChain {\n    private middlewares: Array<{\n        pattern: RegExp;\n        handler: (req: { url: string; headers: Record<string, string>; cookies: Record<string, string> }) => { redirect?: string; rewrite?: string; headers?: Record<string, string>; next?: boolean }\n    }> = [];\n\n    add(pattern: RegExp, handler: typeof this.middlewares[0][\"handler\"]): void {\n        this.middlewares.push({ pattern, handler });\n    }\n\n    run(url: string, req: { headers: Record<string, string>; cookies: Record<string, string> }): any {\n        for (const mw of this.middlewares) {\n            if (mw.pattern.test(url)) {\n                const result = mw.handler({ ...req, url });\n                if (result.redirect || result.rewrite) return result;\n                if (result.headers) Object.assign(req.headers, result.headers);\n            }\n        }\n        return { next: true };\n    }\n\n    static authMiddleware(allowedRoles: string[]): typeof this.middlewares[0][\"handler\"] {\n        return (req) => {\n            const role = req.cookies[\"role\"] || \"guest\";\n            if (!allowedRoles.includes(role)) return { redirect: \"/login\" };\n            return { next: true };\n        };\n    }\n}\n\n// Demo\nconsole.log(\"SSG:\", RenderingStrategyEngine.simulate({ path: \"/about\", strategy: \"ssg\" }).cacheHeaders);\nconsole.log(\"ISR:\", RenderingStrategyEngine.simulate({ path: \"/blog\", strategy: \"isr\", revalidate: 60 }).cacheHeaders);\nconsole.log(\"Recommend /dashboard realtime user:\", RenderingStrategyEngine.recommend(\"/dashboard\", \"daily\", true).strategy);\nconsole.log(\"Route build:\", DynamicRoutePathBuilder.build(\"/blog/[slug]/[id]\", { slug: \"hello-world\", id: \"42\" }));\nconsole.log(\"Match:\", DynamicRoutePathBuilder.match(\"/users/[id]\", \"/users/5\"));\nconst chain = new NextJSMiddlewareChain();\nchain.add(/^\\/admin/, NextJSMiddlewareChain.authMiddleware([\"admin\"]));\nconsole.log(\"Middleware /admin:\", chain.run(\"/admin\", { headers: {}, cookies: { role: \"user\" } }));\nconsole.log(\"Middleware /public:\", chain.run(\"/public\", { headers: {}, cookies: {} }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// nextjs\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'nextjs', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Next.js is a React framework providing SSR, SSG, ISR, and client rendering. The App Router uses file-based routing with nested layouts. Server Components fetch data directly without client JavaScript. API routes handle backend logic. Middleware intercepts requests. SEO is managed through metadata export and sitemap generation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server-actions-deep-dive",
      children: "Server Actions Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Server Actions let you mutate server-side data directly from client components."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// app/actions/todo.ts — Server Action\n\"use server\";\n\nimport { revalidatePath } from \"next/cache\";\n\nexport async function addTodo(formData: FormData) {\n  const title = formData.get(\"title\");\n  if (!title || typeof title !== \"string\") {\n    throw new Error(\"Title is required\");\n  }\n\n  const todo = await prisma.todo.create({\n    data: { title, userId: \"user_123\" },\n  });\n\n  revalidatePath(\"/todos\");\n  return { success: true, todo };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// app/todos/page.tsx — consuming Server Action\nexport default function TodoPage() {\n  return (\n    <form action={addTodo}>\n      <input name=\"title\" required />\n      <button type=\"submit\">Add</button>\n    </form>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "caching-deep-dive",
      children: "Caching Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Next.js has four cache layers. Understanding their interaction prevents stale data."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Request] --> B[Full Route Cache persistent]\n    B -->|Cache MISS| C[Data Cache persistent]\n    B -->|Cache HIT| D[Serve cached page]\n    C --> E[Router Cache client 30s]\n    E -->|Navigate| F[React Cache per-request]\n    F --> G[Origin]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cache"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Invalidation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full Route Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server (disk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent until rebuild"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "revalidatePath"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "revalidateTag"
            }), ", redeploy"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server (disk)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Configurable via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "next: { revalidate }"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cache: \"no-store\""
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "revalidateTag"
            }), ", time-based"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Router Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client (memory)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30s default, 5min for static pages"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "router.refresh()"
            }), ", mutation"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "React Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server (request)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single request lifetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (per-request)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between SSR, SSG, and ISR?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do Server Components reduce client-side JavaScript?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why use next/image instead of a regular img tag?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-projects",
      children: "Application Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert a React SPA to Next.js with proper SSR"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement ISR for a blog with hourly revalidation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add middleware for internationalization (i18n)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement an error boundary and loading skeleton for a dashboard page that fetches data from three separate API endpoints."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a modal using intercepting routes that shows a photo detail view when navigated from a gallery page."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-project",
      children: "Challenge Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a multi-tenant SaaS application in Next.js with dynamic routing by tenant subdomain, middleware for authentication, ISR for public pages, API routes for data operations, image optimization for user uploads, and a complete sitemap with all public URLs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default to Server Components"
        }), " — fetch data in Server Components to eliminate client-side waterfalls and reduce bundle size. Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"use client\""
        }), " only for interactivity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use layouts for persistent UI"
        }), " — navbars, sidebars, and footers belong in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "layout.tsx"
        }), " so they do not remount on navigation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose the right rendering strategy"
        }), " — SSG for static marketing pages, ISR for blog content with periodic updates, SSR for personalized dashboards, client rendering for highly interactive tools."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leverage parallel routes for complex layouts"
        }), " — render independent page sections (analytics, tasks, feed) concurrently in the same layout using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@slot"
        }), " conventions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate metadata dynamically"
        }), " — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "generateMetadata()"
        }), " to set per-page title, description, and Open Graph tags from fetched data for optimal SEO."]
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