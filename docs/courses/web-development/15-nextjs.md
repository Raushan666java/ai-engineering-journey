# Chapter 15: Next.js

## Learning Objectives

By the end of this chapter, you will be able to:
- Set up a Next.js project with App Router
- Implement SSR, SSG, ISR, and client-side rendering
- Create API routes and middleware
- Optimize images, fonts, and metadata for SEO
- Implement dynamic imports and code splitting
- Deploy Next.js applications to production

## 15.1 App Router vs Pages Router

![Next.js Rendering Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/web-development/15-nextjs.png)

```typescript
// App Router (Next.js 13+) - file-based routing with layouts
// app/page.tsx       -> /
// app/about/page.tsx -> /about
// app/blog/[slug]/page.tsx -> /blog/hello-world
// app/api/tasks/route.ts -> /api/tasks

// Layouts persist across navigations
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Nested layout
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  );
}
```

## 15.2 Rendering Strategies

```typescript
// Static Site Generation (SSG) - default, builds at compile time
// app/about/page.tsx
export default function AboutPage() {
  return <h1>About Us</h1>; // Pre-rendered at build time
}

// Server-Side Rendering (SSR) - renders on each request
// app/profile/page.tsx
export default async function ProfilePage() {
  const data = await fetch("https://api.example.com/profile");
  const profile = await data.json();
  return <Profile {...profile} />; // Rendered per request
}
export const dynamic = "force-dynamic";

// Incremental Static Regeneration (ISR) - static + revalidation
// app/blog/[slug]/page.tsx
interface Props {
  params: { slug: string };
}

async function getPost(slug: string) {
  const res = await fetch(`https://api.example.com/posts/${slug}`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  return res.json();
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}

// Generate static params for ISR
export async function generateStaticParams() {
  const posts = await fetch("https://api.example.com/posts").then((r) => r.json());
  return posts.map((post: any) => ({ slug: post.slug }));
}
```

## 15.3 Data Fetching Patterns

```typescript
// Server component - fetch directly
async function getPosts() {
  const res = await fetch("https://api.example.com/posts");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// Client component with SWR
"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function UserProfile({ userId }: { userId: string }) {
  const { data, error, isLoading } = useSWR(
    `/api/users/${userId}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user</div>;
  return <div>{data.name}</div>;
}

// Parallel data fetching
export default async function Dashboard() {
  const [user, projects, tasks] = await Promise.all([
    fetch("/api/user").then((r) => r.json()),
    fetch("/api/projects").then((r) => r.json()),
    fetch("/api/tasks").then((r) => r.json()),
  ]);

  return <DashboardView user={user} projects={projects} tasks={tasks} />;
}
```

## 15.4 API Routes

```typescript
// app/api/tasks/route.ts
import { NextRequest, NextResponse } from "next/server";

// GET /api/tasks
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "20");

  const tasks = await prisma.task.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });
  const total = await prisma.task.count();

  return NextResponse.json({ data: tasks, total, page, limit });
}

// POST /api/tasks
export async function POST(request: NextRequest) {
  const body = await request.json();
  const task = await prisma.task.create({ data: body });
  return NextResponse.json({ data: task }, { status: 201 });
}

// Dynamic route: app/api/tasks/[id]/route.ts
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const task = await prisma.task.update({
    where: { id: params.id },
    data: body,
  });
  return NextResponse.json({ data: task });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.task.delete({ where: { id: params.id } });
  return new NextResponse(null, { status: 204 });
}
```

## 15.5 Middleware

```typescript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("session")?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register");
  const isApiAuth = request.nextUrl.pathname.startsWith("/api/auth");

  // Redirect to login if not authenticated
  if (!token && !isAuthPage && !isApiAuth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to dashboard if already authenticated
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/protected/:path*", "/login", "/register"],
};
```

## 15.6 SEO and Metadata

```typescript
// app/blog/[slug]/page.tsx
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.createdAt,
      authors: [post.author.name],
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  };
}

// app/sitemap.ts
export default async function sitemap() {
  const posts = await getPosts();
  const postUrls = posts.map((post: any) => ({
    url: `https://example.com/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: "https://example.com", lastModified: new Date(), priority: 1.0 },
    { url: "https://example.com/about", priority: 0.5 },
    ...postUrls,
  ];
}
```

## 15.7 Image and Font Optimization

```typescript
// Image optimization with next/image
import Image from "next/image";

export default function Profile() {
  return (
    <Image
      src="/avatar.jpg"
      alt="Profile picture"
      width={200}
      height={200}
      priority // Load with high priority for above-the-fold
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      sizes="(max-width: 768px) 100vw, 200px"
      quality={85}
    />
  );
}

// Remote images - configure in next.config.js
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.example.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
```

## Summary

Next.js is a React framework providing SSR, SSG, ISR, and client rendering. The App Router uses file-based routing with nested layouts. Server Components fetch data directly without client JavaScript. API routes handle backend logic. Middleware intercepts requests. SEO is managed through metadata export and sitemap generation.

## Exercises

### Review Questions

1. What is the difference between SSR, SSG, and ISR?
2. How do Server Components reduce client-side JavaScript?
3. Why use next/image instead of a regular img tag?

### Application Projects

1. Convert a React SPA to Next.js with proper SSR
2. Implement ISR for a blog with hourly revalidation
3. Add middleware for internationalization (i18n)

### Challenge Project

Build a multi-tenant SaaS application in Next.js with dynamic routing by tenant subdomain, middleware for authentication, ISR for public pages, API routes for data operations, image optimization for user uploads, and a complete sitemap with all public URLs.
