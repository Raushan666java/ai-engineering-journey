# Chapter 2 — CSS3

## Learning Objectives

By the end of this chapter, you will be able to:

1. Select HTML elements using a variety of CSS selectors, including combinators and pseudo-classes.
2. Explain and apply the CSS box model, including `box-sizing`, margin collapsing, and the visual formatting model.
3. Build flexible layouts using Flexbox and two-dimensional layouts using CSS Grid.
4. Implement responsive designs using media queries, relative units, and mobile-first principles.
5. Use CSS custom properties (variables) to create maintainable, themeable stylesheets.
6. Create declarative animations and transitions for interactive feedback and visual flair.

## Theory

### 2.1 Selectors

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

- `block` — Fills available width, respects `width`/`height`, forces new line.
- `inline` — Shrinks to content, ignores `width`/`height`, flows with text.
- `inline-block` — Shrinks to content but respects `width`/`height`.
- `flex` — Establishes a flex formatting context for children.
- `grid` — Establishes a grid formatting context for children.
- `none` — Removes element from the layout tree entirely.

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

- `%` — Relative to parent
- `em` — Relative to element's font-size
- `rem` — Relative to root font-size (typically 16px)
- `vw` / `vh` — Percentage of viewport width/height
- `dvw` / `dvh` — Dynamic viewport units (account for mobile toolbars)
- `clamp(min, preferred, max)` — Fluid value between bounds

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

### 2.8 @font-face

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

## Summary

- CSS selectors range from type and class selectors to advanced pseudo-classes like `:has()` and `:nth-child()`.
- The box model comprises content, padding, border, and margin; always use `box-sizing: border-box`.
- Flexbox excels at one-dimensional layout; Grid handles two-dimensional arrangements.
- Responsive design uses relative units, media queries, and mobile-first strategies.
- Custom properties enable themeable, maintainable values that cascade and update at runtime.
- Transitions and animations provide declarative motion without JavaScript.
- `@font-face` with `font-display: swap` optimizes typography loading.

## Exercises

### Review Questions

1. What is the difference between `justify-content` and `align-items` in Flexbox?
2. Explain margin collapsing and list two conditions that prevent it.
3. How does `grid-template-areas` simplify layout definition?
4. What is the difference between `em` and `rem` units?

### Application Problems

5. Create a responsive card grid using Grid with `repeat(auto-fill, minmax(280px, 1fr))`. Each card should have an image, title, description, and button. Include hover effects using transitions.
6. Build a sticky footer layout using Flexbox that keeps the footer at the bottom of the viewport even when content is sparse.
7. Implement a dark-mode toggle using CSS custom properties: define a `[data-theme="dark"]` selector that overrides surface and text colors, and write the JavaScript to toggle the attribute.

### Challenge Problem

8. Build a complete responsive landing page layout using both Flexbox and Grid with the following constraints: mobile (single column, stacked), tablet (two columns for content, sidebar below), desktop (three-column grid with fixed-width sidebar, main content, and aside). Use only CSS (no JavaScript). Implement a sticky header, a hero section with centered content, a card grid, and a footer. Use `clamp()` for fluid typography. Add a `prefers-reduced-motion` media query that disables all animations. Include custom properties for the entire color scheme.
