# Chapter 17: Performance Optimization

## Learning Objectives

By the end of this chapter, you will be able to:
- Measure and optimize Core Web Vitals
- Implement lazy loading and code splitting
- Optimize images, fonts, and bundle sizes
- Configure caching strategies with CDNs and service workers
- Use performance monitoring and profiling tools
- Apply React-specific performance patterns

## 17.1 Core Web Vitals

```typescript
// Web Vitals measurement
// app/reportWebVitals.ts
"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric); // LCP, FID, CLS, FCP, TTFB

    // Send to analytics
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    });
    navigator.sendBeacon("/api/vitals", body);
  });
  return null;
}

// LCP (Largest Contentful Paint) - < 2.5s
// FID (First Input Delay) - < 100ms
// CLS (Cumulative Layout Shift) - < 0.1
// FCP (First Contentful Paint) - < 1.8s
// TTFB (Time to First Byte) - < 800ms
```

## 17.2 Lighthouse Auditing

```bash
# CLI audit with Lighthouse
npx lighthouse https://example.com --view

# Programmatic audit
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const chrome = await chromeLauncher.launch();
const options = { logLevel: "info", output: "json", port: chrome.port };
const runnerResult = await lighthouse("https://example.com", options);

const { performance, accessibility, "best-practices": bp, seo } = runnerResult.lhr.categories;
console.log(`Performance: ${performance.score * 100}`);
console.log(`Accessibility: ${accessibility.score * 100}`);
await chrome.kill();
```

## 17.3 Code Splitting

```typescript
// Dynamic imports with React.lazy
import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));
const ChartDashboard = lazy(() => import("./ChartDashboard"));

function Dashboard() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeavyComponent />
      <ChartDashboard />
    </Suspense>
  );
}

// Named exports with dynamic import
const { formatDistance } = await import("date-fns");

// Route-level code splitting in Next.js
// Next.js automatically splits by route - no config needed
// pages/blog/[slug].js -> separate chunk

// Component-level with next/dynamic
import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import("../components/Editor"), {
  loading: () => <p>Loading editor...</p>,
  ssr: false, // Disable SSR for client-only components
});
```

## 17.4 Bundle Analysis

```bash
# Analyze bundle with Vite
npm run build && npx vite-bundle-analyzer

# Analyze Next.js bundle
ANALYZE=true npm run build

# Check individual package sizes
npx cost-of-modules

# Tree-shaking verification
# Check that imports only pull what's needed
import { format } from "date-fns"; // Good - tree-shakeable
import * as dateFns from "date-fns"; // Bad - imports everything
```

## 17.5 Image Optimization

```typescript
// Responsive images with srcSet
import Image from "next/image";

function HeroImage() {
  return (
    <Image
      src="/hero.webp"
      alt="Hero"
      width={1200}
      height={600}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading="lazy" // Lazy load below-the-fold images
      decoding="async"
      quality={80}
      placeholder="blur"
      blurDataURL="data:image/webp;base64,..."
    />
  );
}

// CSS background image optimization
.hero {
  background-image: image-set(
    url("/hero-small.webp") 1x,
    url("/hero-large.webp") 2x
  );
}

// Image format selection
// Prefer WebP/AVIF over JPEG/PNG
// Use <picture> for format fallbacks
<picture>
  <source srcSet="/hero.avif" type="image/avif" />
  <source srcSet="/hero.webp" type="image/webp" />
  <img src="/hero.jpg" alt="Hero" loading="lazy" />
</picture>
```

## 17.6 Caching Strategies

```typescript
// Service worker with Workbox
// sw.ts
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";

// Precache static assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache images with Cache First
registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  new CacheFirst({
    cacheName: "images",
    plugins: [
      { expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 } },
    ],
  })
);

// Cache API responses with Network First
registerRoute(
  /\/api\/.*\.json/,
  new NetworkFirst({
    cacheName: "api-responses",
    plugins: [{ expiration: { maxEntries: 100, maxAgeSeconds: 300 } }],
  })
);

// Cache static assets with Stale-While-Revalidate
registerRoute(
  /\.(?:css|js)$/,
  new StaleWhileRevalidate({
    cacheName: "static-assets",
  })
);

// CDN Cache headers (server-side)
app.use(
  "/api/posts",
  (req, res, next) => {
    res.set("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
    res.set("CDN-Cache-Control", "public, max-age=300");
    next();
  },
  postsHandler
);
```

## 17.7 React Performance Patterns

```typescript
import { memo, useMemo, useCallback } from "react";

// React.memo - prevent re-renders when props haven't changed
const ExpensiveList = memo(function ExpensiveList({ items }: { items: Item[] }) {
  return items.map((item) => <ExpensiveItem key={item.id} item={item} />);
});

// useMemo - memoize expensive computations
function Dashboard({ tasks }: { tasks: Task[] }) {
  const stats = useMemo(
    () => ({
      total: tasks.length,
      completed: tasks.filter((t) => t.status === "DONE").length,
      overdue: tasks.filter(
        (t) => t.dueDate && new Date(t.dueDate) < new Date()
      ).length,
      byPriority: {
        high: tasks.filter((t) => t.priority === "HIGH").length,
        medium: tasks.filter((t) => t.priority === "MEDIUM").length,
        low: tasks.filter((t) => t.priority === "LOW").length,
      },
    }),
    [tasks]
  );

  return <StatsPanel stats={stats} />;
}

// useCallback - memoize callbacks
function TaskList({ tasks, onStatusChange }: TaskListProps) {
  const handleStatusChange = useCallback(
    (taskId: string, status: string) => {
      onStatusChange(taskId, status);
    },
    [onStatusChange]
  );

  return tasks.map((task) => (
    <TaskItem key={task.id} task={task} onStatusChange={handleStatusChange} />
  ));
}

// Virtual scrolling for large lists
import { FixedSizeList } from "react-window";

function VirtualTaskList({ tasks }: { tasks: Task[] }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={tasks.length}
      itemSize={72}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <TaskItem task={tasks[index]} />
        </div>
      )}
    </FixedSizeList>
  );
}
```

## 17.8 Database Performance

```typescript
// Efficient queries
// BAD: Selecting all columns
const users = await prisma.user.findMany({});

// GOOD: Select only needed columns
const users = await prisma.user.findMany({
  select: { id: true, name: true, email: true },
});

// Batch operations
// BAD: N+1 individual creates
for (const item of items) {
  await prisma.item.create({ data: item });
}

// GOOD: Bulk create
await prisma.item.createMany({ data: items });

// Connection pooling for production
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

## Summary

Web performance optimization spans the entire stack. Core Web Vitals (LCP, FID, CLS) measure user experience. Code splitting reduces initial bundle size. Image optimization saves bandwidth. Caching strategies at CDN, browser, and service worker levels reduce latency. React.memo, useMemo, and useCallback prevent unnecessary re-renders. Database query optimization with proper indexing and batch operations handles data at scale.

## Exercises

### Review Questions

1. What are Core Web Vitals and why do they matter?
2. How does code splitting improve initial page load?
3. When should you use useMemo versus useCallback?

### Application Projects

1. Add lazy loading to images in a photo gallery
2. Implement virtual scrolling for a data table with 10,000+ rows
3. Set up a service worker for offline-first caching

### Challenge Project

Optimize a web application achieving 95+ Lighthouse performance score by implementing: code splitting at route and component level, responsive images with WebP/AVIF, CDN caching with stale-while-revalidate, service worker for offline support, virtual scrolling for large lists, database query optimization with proper indexes, and real user monitoring (RUM) to track Core Web Vitals in production.
