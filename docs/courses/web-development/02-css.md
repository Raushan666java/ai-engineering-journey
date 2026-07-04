# Chapter 2 → CSS3

> **Previous:** [01-html](./01-html.md) | **Next:** [03-js-basics](./03-js-basics.md)

## Learning Objectives

> **One-Sentence Takeaway:** CSS selectors allow precise element targeting using combinators, pseudo-classes, and attribute patterns.

By the end of this chapter, you will be able to:

## Chapter at a Glance

> **One-Sentence Takeaway:** The box model consists of content, padding, border, and margin — always use `box-sizing: border-box`.

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
|Selectors|CSS selectors range from simple types to advanced pseudo-classes like `:has()`|Master combinators, pseudo-classes, and attribute selectors for precise targeting|
|Box Model|Every element is a box of content, padding, border, and margin|Always set `box-sizing: border-box` globally for predictable sizing|
|Flexbox|One-dimensional layout model for distributing space along a row or column|Use `justify-content` for main-axis and `align-items` for cross-axis alignment|
|CSS Grid|Two-dimensional layout system controlling rows and columns simultaneously|Use `grid-template-areas` for intuitive named layout regions|
|Responsive Design|Relative units, media queries, and mobile-first patterns adapt to any screen|Build mobile-first with `min-width` breakpoints and `clamp()` for fluid typography|
|Custom Properties|CSS variables cascade and can be updated at runtime|Define theme palettes with `--color-*` variables in `:root` for easy theming|

## Chapter Roadmap

> **One-Sentence Takeaway:** Flexbox excels at one-dimensional layouts while CSS Grid handles two-dimensional page structures.

```mermaid
graph TD
    A[CSS Selectors]
    B[Box Model & Display]
    A --> B
    C[Flexbox Layouts]
    B --> C
    D[CSS Grid]
    C --> D
    E[Responsive Design]
    D --> E
    F[Custom Properties]
    E --> F
    G[Animations & Transitions]
    F --> G
    H[@font-face]
    G --> H
```


1. Select HTML elements using a variety of CSS selectors, including combinators and pseudo-classes.
2. Explain and apply the CSS box model, including `box-sizing`, margin collapsing, and the visual formatting model.
3. Build flexible layouts using Flexbox and two-dimensional layouts using CSS Grid.
4. Implement responsive designs using media queries, relative units, and mobile-first principles.
5. Use CSS custom properties (variables) to create maintainable, themeable stylesheets.
6. Create declarative animations and transitions for interactive feedback and visual flair.

## Theory

> **One-Sentence Takeaway:** Responsive design requires relative units, media queries, and a mobile-first approach.

### 2.1 Selectors

![CSS Layout and Selectors Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/02-css.png)

CSS selectors determine which elements a rule set applies to. Modern CSS provides a rich selector syntax.

| Selector Pattern | Matches | Example |
|-----------------|---------|---------|
| `*` | Any element | Universal selector |
| `element` | Elements of that type | `div`, `p`, `h1` |
| `.class` | Elements with that class | `.highlight` |
| `#id` | The element with that ID | `#app` |
| `[attr]` | Elements with attribute | `[hidden]` |
| `[attr="val"]` | Exact attribute match | `[type="email"]` |
| `[attr^="val"]` | Attribute begins with | `[href^="https"]` |
| `[attr$="val"]` | Attribute ends with | `[src$=".png"]` |
| `[attr*="val"]` | Attribute contains | `[class*="btn"]` |
| `A B` | B is descendant of A | `article p` |
| `A > B` | B is direct child of A | `ul > li` |
| `A + B` | B immediately follows A | `h2 + p` |
| `A ~ B` | B is a sibling after A | `h2 ~ p` |
| `:hover` | Element being hovered | `a:hover` |
| `:focus-visible` | Element focused via keyboard | `input:focus-visible` |
| `:nth-child(n)` | Nth child | `li:nth-child(odd)` |
| `:not(selector)` | Negation | `input:not([type="hidden"])` |
| `:has(selector)` | Parent containing selector | `figure:has(img)` |
| `::before`, `::after` | Generated content pseudo-elements | `.card::before` |

```css
/* Select all disabled input elements inside a form with class "register" */
form.register input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Style the first paragraph following any h2 */
h2 + p {
  font-size: 1.125rem;
  color: #444;
}

/* Style a figure that contains an image with alt text */
figure:has(img[alt]) {
  border: 2px solid green;
}
```

### 2.2 Box Model

Every element in CSS generates a rectangular box consisting of four areas: content, padding, border, and margin.

```css
/* Visual formatting */
.box {
  width: 300px;
  padding: 16px;
  border: 2px solid #333;
  margin: 24px;
}
```

By default, `width` and `height` apply only to the **content box**. Setting `box-sizing: border-box` includes padding and border in the specified dimensions, which is almost universally preferred.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

**Margin collapsing:** Adjacent vertical margins collapse to the larger of the two margins. This does not apply to horizontal margins or elements with `overflow: hidden`, `position: absolute`, or `display: flex/grid` children.

**Display values** control how boxes participate in the layout:

- `block` → Fills available width, respects `width`/`height`, forces new line.
- `inline` → Shrinks to content, ignores `width`/`height`, flows with text.
- `inline-block` → Shrinks to content but respects `width`/`height`.
- `flex` → Establishes a flex formatting context for children.
- `grid` → Establishes a grid formatting context for children.
- `none` → Removes element from the layout tree entirely.

### 2.3 Flexbox

Flexbox is a one-dimensional layout model (row or column) designed for distributing space among items in a container.

**Container properties:**

```css
.container {
  display: flex;
  flex-direction: row;        /* row | row-reverse | column | column-reverse */
  flex-wrap: wrap;            /* nowrap | wrap | wrap-reverse */
  justify-content: center;    /* main-axis alignment: flex-start | flex-end | center | space-between | space-around | space-evenly */
  align-items: stretch;       /* cross-axis alignment: stretch | flex-start | flex-end | center | baseline */
  gap: 16px;                  /* Row and column gap (replaces margin hacks) */
}
```

**Item properties:**

```css
.item {
  flex: 1 1 200px;        /* grow shrink basis (shorthand) */
  flex-grow: 1;           /* Proportion of available space to absorb */
  flex-shrink: 1;         /* Proportion to shrink when space is insufficient */
  flex-basis: 200px;      /* Initial main-axis size */
  align-self: center;     /* Override container's align-items for this item */
  order: 0;               /* Visual order (not DOM order) */
}
```

Common layout patterns:

```css
/* Centered content (both axes) */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Sticky footer (footer always at bottom) */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}

/* Equal-height columns */
.row {
  display: flex;
  gap: 20px;
}
.row > * {
  flex: 1;
}
```

### 2.4 CSS Grid

Grid is a two-dimensional layout system that controls both rows and columns simultaneously.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* Three equal columns */
  grid-template-rows: auto 1fr auto;       /* Header, content, footer */
  gap: 24px;
}
```

**Key Grid properties:**

```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px;           /* Fixed + flexible + fixed */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  /* Responsive columns */
  grid-template-rows: auto minmax(200px, auto) auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 16px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

The `auto-fill`/`auto-fit` with `minmax()` pattern creates responsive grids without media queries:

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
```

`auto-fill` preserves empty tracks; `auto-fit` collapses them.

### 2.5 Responsive Design

Responsive design ensures content renders well on any device width.

**Relative units:**

- `%` → Relative to parent
- `em` → Relative to element's font-size
- `rem` → Relative to root font-size (typically 16px)
- `vw` / `vh` → Percentage of viewport width/height
- `dvw` / `dvh` → Dynamic viewport units (account for mobile toolbars)
- `clamp(min, preferred, max)` → Fluid value between bounds

**Media queries:**

```css
/* Mobile-first approach: base styles are for narrow screens */
body {
  font-size: 16px;
  padding: 16px;
}

/* Tablet */
@media (width >= 768px) {
  body {
    padding: 32px;
  }
  .sidebar {
    display: block;
  }
}

/* Desktop */
@media (width >= 1024px) {
  .layout {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a2e;
    --text: #e0e0e0;
  }
}
```

### 2.6 CSS Custom Properties

Custom properties (CSS variables) enable reusable, themeable values that cascade and can be changed at runtime via JavaScript.

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --spacing-unit: 8px;
  --border-radius: 6px;
  --font-sans: 'Inter', system-ui, sans-serif;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.card {
  background: var(--color-surface);
  color: var(--color-text);
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-unit) * 3);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-sans);
}
```

Override variables for theming:

```css
[data-theme="dark"] {
  --color-surface: #1e293b;
  --color-text: #f1f5f9;
}
```

### 2.7 Transitions and Animations

**Transitions** interpolate between states:

```css
.button {
  background: var(--color-primary);
  transition: background 0.2s ease, transform 0.15s ease;
}

.button:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
}
```

Transition shorthand: `property duration timing-function delay`.

**Animations** use `@keyframes` for multi-step sequences:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fadeInUp 0.6s ease-out both;
}
```

The `animation` shorthand: `name duration timing-function delay iteration-count direction fill-mode play-state`.

### 2.8 Container Queries

Container queries allow styling based on a parent container's size rather than the viewport.

```css
/* Define a containment context */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Style based on container width */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 16px;
  }
  .card-image {
    width: 100%;
    height: auto;
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}

/* Container query units */
.card-title {
  font-size: clamp(1rem, 5cqw, 2rem); /* 5% of container width */
}
.card {
  padding: 2cqw; /* 2% of container width */
  margin-bottom: 2cqh; /* 2% of container height */
}
```

### 2.9 @font-face

Embed custom fonts for consistent typography:

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
```

The `font-display: swap` ensures text remains visible while the custom font loads, preventing flash-of-invisible-text (FOIT).


> [!TIP]
> Use `clamp(min, preferred, max)` for fluid typography: `font-size: clamp(1rem, 2.5vw, 2rem)` scales smoothly.

> [!WARNING]
> Margin collapsing only affects vertical margins. Horizontal margins never collapse.

> [!REMEMBER]
> `auto-fill` preserves empty grid tracks while `auto-fit` collapses them — choose based on whether ghost columns matter.



## Concept Comparison Table

| Concept | Description | Use Case |
|---------|-------------|---------|
|Flexbox vs Grid|One-dimensional (row OR column)|Two-dimensional (rows AND columns)|
|`em` vs `rem`|Relative to parent font-size|Relative to root font-size (16px default)|
|`auto-fill` vs `auto-fit`|Preserves empty grid tracks|Collapses empty grid tracks|
|Transition vs Animation|Two-state interpolation|Multi-step keyframe sequence|
|`inline` vs `inline-block`|Ignores width/height|Respects width/height|

## Quick Reference

| Topic | Key Points |
|-------|-----------|
|Selectors|.class, #id, [attr], A > B, A + B, A ~ B, :hover, :nth-child(), :has()|
|Box Model|`content-box` (default) vs `border-box`, margin collapsing rules|
|Flex Properties|`flex-direction`,`flex-wrap`,`justify-content`,`align-items`,`gap`,`flex: grow shrink basis`|
|Grid Properties|`grid-template-columns`,`grid-template-rows`,`grid-template-areas`,`gap`|
|Responsive Units|`%`,`em`,`rem`,`vw`,`vh`,`dvw`,`dvh`,`clamp()`|

## Cross-Application Matrix

| Domain | Application | Benefit |
|--------|------------|--------|
|Marketing Site|Flexbox for navbar, Grid for card layout|Consistent, responsive page structure|
|Dashboard|Grid for overall layout, Flexbox for widget content|Two-dimensional page shell with one-dimensional components|
|E-commerce|Flexbox for product rows, Grid for category pages|Flexible product display at any screen width|
|Blog|Grid with `grid-template-areas` for article + sidebar layout|Named regions make layout intent clear|
|Design System|Custom properties for colors, spacing, typography tokens|Single-source theme that cascades everywhere|

## Chapter Quiz

Test your understanding with these quick questions.

**Q1. Which CSS property is the correct way to include padding and border in an element's total width?**

- A) `box-sizing: content-box`
- B) `box-sizing: border-box`
- C) `width: auto`
- D) `display: block`

<details><summary>Answer</summary>

**B) `box-sizing: border-box` includes padding and border in the specified dimensions.**

</details>

**Q2. What does `justify-content: center` do in a flex container?**

- A) Centers items on the cross-axis
- B) Centers items on the main-axis
- C) Centers the entire flex container
- D) Vertically centers all children

<details><summary>Answer</summary>

**B) `justify-content` aligns items along the main axis (defined by `flex-direction`).**

</details>

**Q3. Which media query feature checks for dark mode preference?**

- A) `@media (dark-mode: true)`
- B) `@media (prefers-color-scheme: dark)`
- C) `@media (theme: dark)`
- D) `@media (color-scheme: dark)`

<details><summary>Answer</summary>

**B) `prefers-color-scheme: dark` detects the user's system-wide dark mode setting.**

</details>

**Q4. What does `animation: fadeInUp 0.6s ease-out both;` do?**

- A) Applies the fadeInUp animation once
- B) Runs the animation with a 0.6s delay
- C) Applies both forwards and backwards fill modes
- D) Repeats the animation infinitely

<details><summary>Answer</summary>

**C) `both` applies both `forwards` (retain end state) and `backwards` (apply initial state before delay) fill modes.**

</details>

### TypeScript: CSS Specificity Calculator & Layout Simulator

```typescript
class SpecificityCalc {
  static compute(sel: string): { id: number; class: number; tag: number } {
    return {
      id: (sel.match(/#[\w-]+/g) || []).length,
      class: (sel.match(/\.[\w-]+/g) || []).length + (sel.match(/\[[^\]]+\]/g) || []).length,
      tag: (sel.match(/(?:^|[^.#\[:\s])([a-z][\w-]*)(?=[\s,.#\[:\s]|$)/gi) || []).length,
    };
  }
  static compare(a: string, b: string): string {
    const score = (s: string) => {
      const c = SpecificityCalc.compute(s);
      return c.id * 100 + c.class * 10 + c.tag;
    };
    const sa = score(a), sb = score(b);
    return sa > sb ? `${a} wins (${sa})` : sb > sa ? `${b} wins (${sb})` : "Equal";
  }
}

class FlexboxSimulator {
  static distributeItems(container: number, items: number[], gap: number): number[] {
    const totalGap = gap * (items.length - 1);
    const available = container - totalGap;
    const totalSize = items.reduce((a, b) => a + b, 0);
    return items.map(s => (s / totalSize) * available);
  }
  static wrap(items: number[], maxWidth: number): number[][] {
    const rows: number[][] = [[]];
    items.forEach(s => {
      const row = rows[rows.length - 1];
      row.reduce((a, b) => a + b, 0) + s > maxWidth ? rows.push([s]) : row.push(s);
    });
    return rows.filter(r => r.length);
  }
}

class GridSimulator {
  static templateColumns(cols: number, gap: number, width: number): number {
    return (width - gap * (cols - 1)) / cols;
  }
}

console.log("Specificity:", SpecificityCalc.compare("div .container#main", "nav ul li"));
console.log("Flex:", FlexboxSimulator.distributeItems(800, [200, 150, 100], 20));
console.log("Grid:", GridSimulator.templateColumns(3, 16, 1200));
```

## TypeScript Implementation: Specificity Calculator, Breakpoints, and Color Contrast

```typescript
class CSSSpecificity {
    static calculate(selector: string): { id: number; class: number; tag: number; total: number } {
        const id = (selector.match(/#[a-zA-Z0-9_-]+/g) || []).length;
        const cls = (selector.match(/\.[a-zA-Z0-9_-]+/g) || []).length;
        const attr = (selector.match(/\[[^\]]+\]/g) || []).length;
        const pseudo = (selector.match(/::?[a-zA-Z-]+/g) || []).filter(p => !["::before","::after","::first-line","::first-letter"].includes(p)).length;
        const tag = (selector.match(/(^|[^.#\[])[a-zA-Z][a-zA-Z0-9]*/g) || []).filter(s => !["hover","focus","active","visited","link","first","last","nth","not","is","where","has"].includes(s.trim())).length;
        return { id, class: cls + attr + pseudo, tag, total: id * 1000 + (cls + attr + pseudo) * 100 + tag };
    }

    static compare(a: string, b: string): string {
        const sa = this.calculate(a); const sb = this.calculate(b);
        if (sa.total > sb.total) return `"${a}" wins (${sa.total} vs ${sb.total})`;
        if (sb.total > sa.total) return `"${b}" wins (${sb.total} vs ${sa.total})`;
        return `"${a}" and "${b}" tie (${sa.total})`;
    }

    static explain(selector: string): string {
        const s = this.calculate(selector);
        return `Selector "${selector}": ${s.id} ID × 1000 = ${s.id * 1000}, ${s.class} class/attr/pseudo × 100 = ${s.class * 100}, ${s.tag} tags × 1 = ${s.tag}, total = ${s.total}`;
    }
}

class ResponsiveBreakpoints {
    static detect(widths: number[]): { name: string; minPx: number }[] {
        const sorted = [...new Set(widths)].sort((a, b) => a - b);
        const names = ["mobile-s", "mobile", "tablet", "tablet-l", "laptop", "desktop", "wide"];
        const breakpoints: { name: string; minPx: number; maxPx: number | null }[] = [];
        for (let i = 0; i < sorted.length; i++) {
            const name = names[i] || `custom-${i}`;
            breakpoints.push({
                name,
                minPx: sorted[i],
                maxPx: i < sorted.length - 1 ? sorted[i + 1] - 1 : null
            });
        }
        return breakpoints;
    }

    static generateCSS(breakpoints: { name: string; minPx: number }[]): string {
        return breakpoints.map(bp =>
            `/* ${bp.name} = ${bp.minPx}px */\n@media (min-width: ${bp.minPx}px) {\n  /* ${bp.name} styles */\n}\n`
        ).join("\n");
    }

    static findActive(width: number, breakpoints: { name: string; minPx: number }[]): string {
        const active = breakpoints.filter(bp => width >= bp.minPx);
        return active.length > 0 ? active[active.length - 1].name : "below-min";
    }
}

class ColorContrastChecker {
    static hexToRgb(hex: string): [number, number, number] {
        const h = hex.replace("#", "");
        return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
    }

    static luminance(r: number, g: number, b: number): number {
        const [rl, gl, bl] = [r, g, b].map(v => { const s = v / 255; return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; });
        return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
    }

    static ratio(fg: string, bg: string): number {
        const [r1, g1, b1] = this.hexToRgb(fg); const [r2, g2, b2] = this.hexToRgb(bg);
        const l1 = this.luminance(r1, g1, b1); const l2 = this.luminance(r2, g2, b2);
        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }

    static meetsAA(fg: string, bg: string, largeText: boolean = false): boolean {
        return this.ratio(fg, bg) >= (largeText ? 3 : 4.5);
    }

    static meetsAAA(fg: string, bg: string, largeText: boolean = false): boolean {
        return this.ratio(fg, bg) >= (largeText ? 4.5 : 7);
    }

    static suggest(fg: string, bg: string): string {
        const r = this.ratio(fg, bg);
        if (r >= 7) return "Excellent (AAA)";
        if (r >= 4.5) return "Good (AA)";
        if (r >= 3) return "Minimum (AA large text)";
        return "FAIL — insufficient contrast";
    }
}

// Demo
console.log(CSSSpecificity.explain("div .container#main a.active"));
console.log(CSSSpecificity.compare("div .container#main", "nav ul li"));
const bps = ResponsiveBreakpoints.detect([320, 480, 768, 1024, 1280, 1440]);
console.log("Breakpoints:", bps.map(b => `${b.name}: ${b.minPx}px`).join(", "));
console.log("Active at 900px:", ResponsiveBreakpoints.findActive(900, bps));
console.log("Contrast #333/#fff:", ColorContrastChecker.ratio("#333", "#fff").toFixed(2), ColorContrastChecker.suggest("#333", "#fff"));
console.log("Contrast #ccc/#fff:", ColorContrastChecker.ratio("#ccc", "#fff").toFixed(2), ColorContrastChecker.suggest("#ccc", "#fff"));
```


// css
// fullstack-frontend-backend implementation

interface Task { id: string; name: string; status: string; data: unknown }
class Processor {
  private tasks: Task[] = []
  private maxConcurrency: number
  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }
  async add(task: Omit<Task, "status">): Promise<void> {
    this.tasks.push({ ...task, status: "pending" })
  }
  async runAll(): Promise<void> {
    const running: Promise<void>[] = []
    for (const t of this.tasks) {
      if (running.length >= this.maxConcurrency) { await Promise.race(running) }
      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })
      running.push(p)
    }
    await Promise.all(running)
  }
  private async execute(t: Task): Promise<void> {
    t.status = "running"
    await new Promise(r => setTimeout(r, 10))
    t.status = "done"
  }
  getResults(): Task[] { return this.tasks }
  getStats(): { done: number; pending: number; running: number } {
    const done = this.tasks.filter(t => t.status === "done").length
    const pending = this.tasks.filter(t => t.status === "pending").length
    const running = this.tasks.filter(t => t.status === "running").length
    return { done, pending, running }
  }
}
async function main() {
  const proc = new Processor(2)
  await proc.add({ id: '1', name: 'css', data: { topic: 'fullstack-frontend-backend' } })
  await proc.runAll()
  console.log('Stats:', proc.getStats())
}
main().catch(console.error)
export { Processor, Task }
## Summary

> **One-Sentence Takeaway:** CSS custom properties enable maintainable, themeable stylesheets that update at runtime.

- CSS selectors range from type and class selectors to advanced pseudo-classes like `:has()` and `:nth-child()`.
- The box model comprises content, padding, border, and margin; always use `box-sizing: border-box`.
- Flexbox excels at one-dimensional layout; Grid handles two-dimensional arrangements.
- Responsive design uses relative units, media queries, and mobile-first strategies.
- Custom properties enable themeable, maintainable values that cascade and update at runtime.
- Transitions and animations provide declarative motion without JavaScript.
- `@font-face` with `font-display: swap` optimizes typography loading.

## Exercises

> **One-Sentence Takeaway:** Transitions and animations provide declarative motion without requiring JavaScript.

### Review Questions

1. What is the difference between `justify-content` and `align-items` in Flexbox?
2. Explain margin collapsing and list two conditions that prevent it.
3. How does `grid-template-areas` simplify layout definition?
4. What is the difference between `em` and `rem` units?

### Application Problems

5. Create a responsive card grid using Grid with `repeat(auto-fill, minmax(280px, 1fr))`. Each card should have an image, title, description, and button. Include hover effects using transitions.
6. Build a sticky footer layout using Flexbox that keeps the footer at the bottom of the viewport even when content is sparse.
7. Implement a dark-mode toggle using CSS custom properties: define a `[data-theme="dark"]` selector that overrides surface and text colors, and write the JavaScript to toggle the attribute.

### Practical Takeaways

1. **Always use `box-sizing: border-box` globally** — this single rule prevents countless layout headaches by including padding and border in element width calculations.
2. **Master Flexbox for one-dimensional layouts** — learn `justify-content` (main axis), `align-items` (cross axis), and `flex: grow shrink basis` for 90% of layout needs.
3. **Use CSS Grid for two-dimensional layouts** — `grid-template-areas` makes layout intent readable at a glance. Reserve Flexbox for content within grid cells.
4. **Build mobile-first with `min-width` breakpoints** — base styles are for narrow screens; media queries add complexity as space increases.
5. **Use container queries for reusable components** — container queries let a component adapt to its parent's size, not the viewport, making the component truly reusable in any context.

### CSS Cascade Layers and @layer

Cascade layers let authors control specificity order at the layer level.

```css
/* Declare layer order (first declared = lowest precedence) */
@layer reset, base, components, utilities;

/* Reset layer — zero specificity wins */
@layer reset {
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

/* Base layer — element defaults */
@layer base {
  body {
    font-family: system-ui, sans-serif;
    line-height: 1.6;
  }
}

/* Component layer — class-based styles */
@layer components {
  .card {
    background: var(--color-surface);
    border-radius: 0.5rem;
    padding: 1rem;
  }
}

/* Utilities layer — highest precedence */
@layer utilities {
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
}
```

### Container Queries Deep Dive

Container queries let components respond to their parent size, not the viewport.

```css
/* Define containment context */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Query the container width */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}

/* Style queries — check container style values */
@container card style(--theme: dark) {
  .card { background: #222; color: #fff; }
}
```

### Application Problems: at container widths >= 400px show a horizontal layout with image on the left, below 400px show a vertical stacked layout.
9. Build a CSS-only accordion component using the `:target` pseudo-class or `details`/`summary` elements with smooth open/close transitions.

### Challenge Problem

10. Build a complete responsive landing page layout using both Flexbox and Grid with the following constraints: mobile (single column, stacked), tablet (two columns for content, sidebar below), desktop (three-column grid with fixed-width sidebar, main content, and aside). Use only CSS (no JavaScript). Implement a sticky header, a hero section with centered content, a card grid, and a footer. Use `clamp()` for fluid typography. Add a `prefers-reduced-motion` media query that disables all animations. Include custom properties for the entire color scheme.
