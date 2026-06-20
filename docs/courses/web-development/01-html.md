# Chapter 1 â€” HTML5

> **Next:** [02-css](./02-css.md)

## Learning Objectives

> **One-Sentence Takeaway:** Semantic HTML5 elements provide meaningful document structure that aids accessibility and SEO.

By the end of this chapter, you will be able to:

## Chapter at a Glance

> **One-Sentence Takeaway:** HTML5 forms offer built-in validation through attributes like `required`, `pattern`, and `min`/`max`.

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
|Semantic Elements|Landmark tags convey meaning to browsers and assistive tech|Use `<header>`,`<nav>`,`<main>`,`<section>`,`<article>`,`<aside>`,`<footer>` for document structure|
|HTML Forms|Rich input types and validation attributes enable client-side checks|Leverage `required`,`pattern`,`min`,`max` for zero-JS validation|
|Multimedia|Native `<audio>` and `<video>` elements replace plugin-based players|Always provide multiple source formats and a `<track>` for captions|
|Accessibility|WCAG 2.2 and ARIA make web content perceivable by all users|Add `alt` text, ARIA roles, and keyboard support to every component|
|SEO Meta Tags|Open Graph and Twitter Card tags control link previews|Include `og:title`,`og:description`,`og:image` for social sharing|
|Browser APIs|Web Storage, Geolocation, Drag & Drop enable rich client features|Use `localStorage` for persistence, `sessionStorage` for tab-scoped data|

## Chapter Roadmap

> **One-Sentence Takeaway:** Native `<audio>` and `<video>` elements with multiple source formats ensure broad browser compatibility.

```mermaid
graph TD
    A[Semantic Document Structure]
    B[HTML Forms & Validation]
    A --> B
    C[Multimedia Elements]
    B --> C
    D[Accessibility & ARIA]
    C --> D
    E[SEO & Meta Tags]
    D --> E
    F[Browser APIs]
    E --> F
    G[Putting It All Together]
    F --> G
```


1. Construct semantically correct HTML5 documents using the full complement of semantic elements.
2. Implement accessible, validated HTML forms with modern input types and constraint validation.
3. Embed audio, video, and interactive media using native HTML5 elements.
4. Apply ARIA roles, states, and properties to improve accessibility for assistive technologies.
5. Use SEO meta tags to influence search-engine indexing and social-media link previews.
6. Leverage browser APIs including the Geolocation API, Web Storage, and the Drag and Drop API.

## Theory

> **One-Sentence Takeaway:** ARIA roles and properties bridge accessibility gaps for custom interactive widgets.

### 1.1 Semantic Document Structure

![HTML5 Elements Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/01-html.png)

HTML5 introduced a set of landmark elements that replace the generic `<div>`-based document structure. These elements convey meaning about the content they contain, aiding accessibility, search-engine indexing, and code readability.

The primary semantic landmarks are:

- `<header>` â€” Introductory content, navigation links, branding, or heading group for a page or section.
- `<nav>` â€” A block of navigation links. Documents may contain multiple `<nav>` elements (e.g., primary nav, table of contents, breadcrumbs).
- `<main>` â€” The dominant content of the `<body>`. A document must have exactly one `<main>` element, visible and not hidden via `display: none` or `aria-hidden`.
- `<section>` â€” A thematic grouping of content, typically introduced with a heading. Not a generic container; use `<div>` when no semantic relationship exists.
- `<article>` â€” A self-contained composition that is independently distributable or reusable (forum post, news story, blog entry, comment).
- `<aside>` â€” Content tangentially related to the surrounding content, such as sidebars, pull quotes, or advertising.
- `<footer>` â€” Footer for its nearest ancestor sectioning content; typically contains author info, copyright, or related links.

A typical document skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document Title</title>
</head>
<body>
  <header>
    <nav aria-label="Primary">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h1>Article Heading</h1>
      <section>
        <h2>Section Heading</h2>
        <p>Content.</p>
      </section>
    </article>
    <aside>
      <h2>Related Links</h2>
    </aside>
  </main>
  <footer>
    <p>&copy; 2026</p>
  </footer>
</body>
</html>
```

### 1.2 HTML Forms

Forms are the primary mechanism for user-to-server data submission. HTML5 specifies a rich set of input types and attributes that enable client-side constraint validation without JavaScript.

**Input types** include `text`, `email`, `url`, `tel`, `number`, `range`, `date`, `time`, `datetime-local`, `month`, `week`, `color`, `file`, `password`, `search`, and `checkbox`/`radio`.

**Validation attributes:**

| Attribute | Effect |
|-----------|--------|
| `required` | Field must have a value before submission |
| `minlength` / `maxlength` | String length constraints |
| `min` / `max` | Numeric or date range constraints |
| `step` | Increment granularity for `number` and `range` |
| `pattern` | Regular expression the value must match |

```html
<form action="/api/users" method="POST" novalidate>
  <label for="name">Full Name</label>
  <input
    type="text"
    id="name"
    name="name"
    required
    minlength="2"
    maxlength="100"
    autocomplete="name"
  />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required autocomplete="email" />

  <label for="age">Age</label>
  <input type="number" id="age" name="age" min="1" max="150" step="1" />

  <label for="avatar">Profile Picture</label>
  <input type="file" id="avatar" name="avatar" accept="image/png,image/jpeg" />

  <fieldset>
    <legend>Preferred Contact Method</legend>
    <label><input type="radio" name="contact" value="email" checked /> Email</label>
    <label><input type="radio" name="contact" value="phone" /> Phone</label>
  </fieldset>

  <label>
    <input type="checkbox" name="terms" required />
    I agree to the terms of service
  </label>

  <button type="submit">Register</button>
</form>
```

The `novalidate` attribute on `<form>` disables browser validation, allowing JavaScript-based or server-side validation to take full control.

### 1.3 Multimedia

HTML5 provides native elements for embedding media without third-party plugins.

**Audio:**

```html
<audio controls preload="metadata">
  <source src="track.mp3" type="audio/mpeg" />
  <source src="track.ogg" type="audio/ogg" />
  <p>Your browser does not support the audio element.</p>
</audio>
```

**Video:**

```html
<video controls width="640" poster="thumbnail.jpg">
  <source src="presentation.mp4" type="video/mp4" />
  <source src="presentation.webm" type="video/webm" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
  <p>Your browser does not support the video element.</p>
</video>
```

The `<track>` element supports `kind` values of `captions`, `subtitles`, `descriptions`, `chapters`, and `metadata` â€” essential for accessibility and internationalization.

**Canvas:**

The `<canvas>` element provides a bitmap drawing surface controlled via JavaScript. It is suitable for graphs, game rendering, and image processing.

```html
<canvas id="chart" width="600" height="400">
  <p>Your browser does not support the canvas element.</p>
</canvas>
```

```javascript
const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#4a90d9';
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#fff';
ctx.font = 'bold 24px sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('42%', 200, 200);
```

### 1.4 Accessibility

Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with web content. The WCAG 2.2 standard defines four principles: **Perceivable**, **Operable**, **Understandable**, and **Robust**.

**ARIA (Accessible Rich Internet Applications)** provides a vocabulary of roles, states, and properties for custom interactive widgets.

```html
<div
  role="tablist"
  aria-label="Product Information"
>
  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">
    Description
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">
    Reviews
  </button>
</div>
<div role="tabpanel" id="panel1" aria-labelledby="tab1">
  <p>Product description content.</p>
</div>
<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>
  <p>Customer reviews.</p>
</div>
```

**Alt text** is required on all `<img>` elements. Decorative images should use `alt=""` (empty) so screen readers ignore them.

```html
<img src="chart.png" alt="Bar chart showing quarterly revenue growth from Q1 to Q4" />
<img src="divider.svg" alt="" aria-hidden="true" />
```

**Landmark roles** are implicitly derived from semantic elements: `<nav>` maps to `role="navigation"`, `<main>` to `role="main"`, `<aside>` to `role="complementary"`.

### 1.5 SEO Meta Tags

Search engines use `<meta>` tags and structured data to understand page content and generate rich search results.

```html
<head>
  <title>Introduction to Web Development | University Textbook</title>
  <meta name="description" content="A comprehensive introduction to modern web development covering HTML5, CSS3, JavaScript, React, Node.js, and deployment." />
  <meta name="keywords" content="web development, HTML5, CSS3, JavaScript, React, Node.js" />
  <meta name="author" content="Web Development Faculty" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="Introduction to Web Development" />
  <meta property="og:description" content="A comprehensive introduction to modern web development." />
  <meta property="og:image" content="https://example.com/og-image.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Introduction to Web Development" />
  <meta name="twitter:description" content="A comprehensive introduction to modern web development." />
  <meta name="twitter:image" content="https://example.com/twitter-image.png" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://example.com/web-dev-intro" />

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</head>
```

### 1.6 HTML APIs

**Web Storage** provides key-value storage with two scopes: `localStorage` (persists across sessions) and `sessionStorage` (cleared when the tab closes).

```javascript
// Store
localStorage.setItem('theme', 'dark');
sessionStorage.setItem('formProgress', JSON.stringify({ step: 3, valid: true }));

// Retrieve
const theme = localStorage.getItem('theme');
const progress = JSON.parse(sessionStorage.getItem('formProgress'));

// Remove
localStorage.removeItem('theme');
sessionStorage.clear();
```

**Geolocation API** obtains the user's current position (subject to permission prompts).

```javascript
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`User is at ${latitude}, ${longitude}`);
    },
    (error) => {
      console.error('Geolocation error:', error.message);
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
}
```

**Drag and Drop API** enables interactive drag-and-drop interfaces.

```html
<div id="source" draggable="true" ondragstart="onDragStart(event)">
  Drag me
</div>
<div id="target" ondrop="onDrop(event)" ondragover="onDragOver(event)">
  Drop here
</div>
```

```javascript
function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.dataTransfer.effectAllowed = 'move';
}

function onDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function onDrop(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);
  event.target.appendChild(draggable);
}
```


> [!TIP]
> Use the `<picture>` element with `<source>` tags for responsive images and format fallbacks (WebP, AVIF, JPEG).

> [!WARNING]
> Always use `label` elements with `for` attributes on form inputs to ensure screen-reader accessibility.

> [!REMEMBER]
> A valid HTML document must have exactly one `<main>` element per page — never duplicate it.



## Concept Comparison Table

| Concept | Description | Use Case |
|---------|-------------|---------|
|`<section>` vs `<div>`|Semantic grouping with heading|Generic container without meaning|
|`localStorage` vs `sessionStorage`|Persists across sessions|Cleared when tab closes|
|`<audio>` vs `<video>`|Sound-only playback|Visual + audio with optional captions|
|`aria-selected` vs `aria-current`|Indicates selected option in a group|Indicates current item in a set|
|`GET` vs `POST` form|Retrieves data, visible in URL|Submits data, hidden in body|

## Quick Reference

| Topic | Key Points |
|-------|-----------|
|Semantic Elements|`<header>`,`<nav>`,`<main>`,`<section>`,`<article>`,`<aside>`,`<footer>`|
|Form Validation|`required`,`pattern`,`minlength`,`maxlength`,`min`,`max`,`step`|
|Multimedia Attributes|`controls`,`autoplay`,`loop`,`preload`,`poster`,`muted`|
|ARIA Landmarks|`role='banner'`,`role='navigation'`,`role='main'`,`role='complementary'`,`role='contentinfo'`|
|Open Graph Tags|`og:title`,`og:description`,`og:image`,`og:type`,`og:url`|

## Cross-Application Matrix

| Domain | Application | Benefit |
|--------|------------|--------|
|Blog|Semantic structure, SEO meta tags|Improved search ranking and accessibility|
|E-commerce|Forms with validation, ARIA for product cards|Better conversion through usable forms|
|Video Platform|Native video with captions and poster|Cross-browser video without plugins|
|Social Media|Open Graph tags, drag-and-drop uploads|Rich link previews and intuitive interactions|
|Dashboard|Web Storage for preferences, canvas for charts|Persistent settings and dynamic visualizations|

## Chapter Quiz

Test your understanding with these quick questions.

**Q1. Which HTML5 semantic element represents the dominant content of the page?**

- A) `<header>`
- B) `<main>`
- C) `<section>`
- D) `<article>`

<details><summary>Answer</summary>

**B) `<main>` — a document must have exactly one visible `<main>` element.**

</details>

**Q2. What attribute on an `<input>` element enforces a regular expression pattern?**

- A) `required`
- B) `regex`
- C) `pattern`
- D) `format`

<details><summary>Answer</summary>

**C) `pattern` — the value is matched against the given regular expression.**

</details>

**Q3. Which storage mechanism persists data even after the browser is closed?**

- A) `sessionStorage`
- B) `localStorage`
- C) Cookies without expiry
- D) Both B and C

<details><summary>Answer</summary>

**D) Both B and C — `localStorage` and persistent cookies survive browser restarts.**

</details>

**Q4. What is the purpose of the `alt` attribute on `<img>` elements?**

- A) Display a tooltip on hover
- B) Provide alternative text for screen readers
- C) Set the image dimensions
- D) Link to a higher-resolution version

<details><summary>Answer</summary>

**B) The `alt` attribute provides alternative text for assistive technologies and when images fail to load.**

</details>

## Summary

> **One-Sentence Takeaway:** Meta tags and Open Graph data control how content appears in search results and social media.

- HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) provide meaning and improve accessibility.
- HTML5 forms include built-in validation via attributes such as `required`, `pattern`, `min`, and `max`.
- Native `<audio>` and `<video>` elements support multiple codecs and accessibility tracks.
- ARIA roles and properties supplement native semantics for custom widgets.
- Meta tags and Open Graph data improve SEO and social-media link sharing.
- Browser APIs such as Web Storage, Geolocation, and Drag and Drop enable rich client-side functionality without external libraries.

## Exercises

> **One-Sentence Takeaway:** Browser APIs like Web Storage and Geolocation enable feature-rich client-side experiences.

### Review Questions

1. List the seven primary semantic HTML5 elements and describe the purpose of each.
2. What is the difference between `localStorage` and `sessionStorage`?
3. Explain the function of the `pattern` attribute on an `<input>` element.
4. What does the `aria-selected` attribute communicate to assistive technology?

### Application Problems

5. Write the HTML for a product review form with fields for name, rating (1â€“5), email, and review text. Include appropriate validation and accessibility attributes.
6. Build a page layout using `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, and `<footer>` that represents a blog post with a sidebar containing related links.
7. Implement an audio player with fallback text and both MP3 and OGG source formats.

### Challenge Problem

8. Build a fully accessible tab panel component using only HTML and ARIA attributes. The component must have three tabs labeled "Description", "Specifications", and "Reviews". Include proper keyboard interaction semantics (`role`, `aria-selected`, `aria-controls`, `aria-labelledby`, `tabindex`). Demonstrate the expected DOM structure with all three tab panels containing placeholder content. Add JavaScript that handles click events to switch tabs, updating `aria-selected` and hiding/showing the corresponding panels. Ensure only the active tab panel is visible.
