# Chapter 7: Web Technologies — Exam Quick Revision

## Learning Objectives
- Distinguish 2-tier, 3-tier, and n-tier client-server architectures
- Apply HTML5 semantic elements and CSS selectors with specificity calculation
- Manipulate DOM and handle events using JavaScript
- Compare HTTP methods and interpret status codes
- Differentiate cookies, sessions, local storage, and session storage
- Design RESTful APIs following resource-oriented principles
- Trace the browser rendering pipeline from HTML to visual output

---

## 1. Client-Server Architecture

| Architecture | Description | Pros | Cons |
|-------------|-------------|------|------|
| **2-Tier** | Client ↔ Server (DB) | Simple, fast for small apps | Scalability issues, fat client |
| **3-Tier** | Client ↔ App Server ↔ DB Server | Scalable, thin client, security | More complex, more latency |
| **n-Tier** | Multiple specialized servers | Highly scalable, modular | Complex deployment, expensive |

```
2-Tier: [Browser] ←→ [DB Server]
3-Tier: [Browser] ←→ [Web/App Server] ←→ [DB Server]
n-Tier: [Browser] ←→ [Load Balancer] ←→ [Web Server] ←→ [App Server] ←→ [DB Server]
```

---

## 2. HTML5 Semantic Elements

| Element | Purpose | Non-semantic alternative |
|---------|---------|--------------------------|
| `<header>` | Introductory content, navigation | `<div id="header">` |
| `<nav>` | Navigation links block | `<div id="nav">` |
| `<main>` | Primary content (unique per page) | `<div id="main">` |
| `<article>` | Self-contained composition | `<div class="article">` |
| `<section>` | Thematic grouping of content | `<div class="section">` |
| `<aside>` | Tangentially related content | `<div id="sidebar">` |
| `<footer>` | Footer for section/page | `<div id="footer">` |
| `<figure>` | Self-contained media with caption | `<div class="figure">` |
| `<figcaption>` | Caption for `<figure>` | `<p class="caption">` |
| `<time>` | Machine-readable date/time | `<span class="time">` |

**Why semantic?** Accessibility (screen readers), SEO, cleaner code structure.

---

## 3. CSS Selectors &amp; Specificity

### CSS Selector Types

| Selector | Pattern | Example |
|----------|---------|---------|
| Universal | `*` | `* { margin: 0; }` |
| Type/Element | `element` | `p { color: red; }` |
| Class | `.class` | `.highlight { background: yellow; }` |
| ID | `#id` | `#header { height: 60px; }` |
| Attribute | `[attr=value]` | `[type="text"] { border: 1px solid; }` |
| Descendant | `A B` | `div p { }` — any p inside div |
| Child | `A > B` | `ul > li { }` — direct child only |
| Adjacent sibling | `A + B` | `h2 + p { }` — p immediately after h2 |
| General sibling | `A ~ B` | `h2 ~ p { }` — any p after h2 |
| Pseudo-class | `:pseudo` | `a:hover { }`, `:first-child`, `:nth-child(n)` |
| Pseudo-element | `::pseudo` | `::before`, `::after`, `::first-line` |

### Specificity Calculation

**Formula:** (Number of ID selectors, Number of class/pseudo-class/attribute selectors, Number of type/pseudo-element selectors)

```
#header .nav li → (1, 1, 1) → specificity = 1-1-1
.nav a:hover → (0, 2, 1) → specificity = 0-2-1
div p → (0, 0, 2) → specificity = 0-0-2
* → (0, 0, 0) → specificity = 0-0-0
```

**Inline styles** override all (specificity = 1-0-0-0). `!important` overrides everything (use sparingly).

---

## 4. JavaScript — DOM Manipulation &amp; Events

### DOM Traversal &amp; Manipulation
```javascript
// Selection
document.getElementById('id');
document.getElementsByClassName('cls');   // HTMLCollection (live)
document.querySelector('.class');          // first match
document.querySelectorAll('p');            // NodeList (static)

// Traversal
element.parentNode;
element.children;           // HTMLCollection
element.firstElementChild;
element.nextElementSibling;

// Manipulation
element.textContent = 'Hello';
element.innerHTML = '<b>Bold</b>';         // XSS risk
element.setAttribute('src', 'img.jpg');
element.style.color = 'red';
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');
```

### Event Handling
```javascript
// Traditional
element.onclick = function() { };

// Modern (recommended)
element.addEventListener('click', function(e) {
    console.log(e.target, e.type);
    e.preventDefault();           // prevent default behavior
    e.stopPropagation();          // stop bubbling
}, false);                        // false = bubble phase (default)

// Event delegation — single listener on parent
document.querySelector('ul').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        console.log('Clicked li:', e.target.textContent);
    }
});
```

### Event Phases
1. **Capturing phase:** Window → Document → ... → Target
2. **Target phase:** Event reaches target element
3. **Bubbling phase:** Target → ... → Document → Window (default)

---

## 5. JSON vs XML

| Aspect | JSON | XML |
|--------|------|-----|
| Full form | JavaScript Object Notation | Extensible Markup Language |
| Syntax | `{"key": "value"}` | `<key>value</key>` |
| Data types | string, number, boolean, null, array, object | All text — types declared via schema |
| Parsing | Native `JSON.parse()` in JS, fast | Requires XML parser, slower |
| Namespace | No | Yes (`xmlns:`) |
| Comments | Not supported | `<!-- comment -->` |
| Schema | JSON Schema (optional) | XSD, DTD |
| Use cases | REST APIs, config files | SOAP, document storage, configuration |
| File size | Smaller | Larger (closing tags) |

---

## 6. HTTP Methods

| Method | Safe | Idempotent | Cacheable | Body in Request | Use Case |
|--------|------|------------|-----------|-----------------|----------|
| **GET** | ✅ | ✅ | ✅ | ❌ | Retrieve resource |
| **HEAD** | ✅ | ✅ | ✅ | ❌ | Headers only (no body) |
| **POST** | ❌ | ❌ | ⚠️ | ✅ | Create resource |
| **PUT** | ❌ | ✅ | ❌ | ✅ | Full update/replace |
| **PATCH** | ❌ | ❌ | ❌ | ✅ | Partial update |
| **DELETE** | ❌ | ✅ | ❌ | ❌ (usually) | Remove resource |
| **OPTIONS** | ✅ | ✅ | ❌ | ❌ | Allowed methods for resource |

**Safe:** Does not modify server state. **Idempotent:** N identical requests have same effect as one.

---

## 7. HTTP Status Codes

| Code | Category | Meaning |
|------|----------|---------|
| **1xx** | Informational | Request received, continuing |
| 100 | Continue | Client should send body |
| 101 | Switching Protocols | WebSocket upgrade |
| **2xx** | Success | Request succeeded |
| 200 | OK | Standard success |
| 201 | Created | Resource created (POST) |
| 204 | No Content | Success, no body (DELETE) |
| **3xx** | Redirection | Further action needed |
| 301 | Moved Permanently | New URL, update bookmarks |
| 302 | Found | Temporarily at other URL |
| 304 | Not Modified | Use cached version |
| **4xx** | Client Error | Request problem |
| 400 | Bad Request | Malformed syntax |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Authenticated but not allowed |
| 404 | Not Found | Resource doesn't exist |
| 405 | Method Not Allowed | Wrong HTTP method |
| 429 | Too Many Requests | Rate limit exceeded |
| **5xx** | Server Error | Server failed |
| 500 | Internal Server Error | Generic server failure |
| 502 | Bad Gateway | Upstream server invalid response |
| 503 | Service Unavailable | Temporarily overloaded/down |
| 504 | Gateway Timeout | Upstream server timeout |

---

## 8. Cookies vs Sessions vs Local Storage

| Feature | Cookie | Session Storage | Local Storage |
|---------|--------|----------------|---------------|
| **Capacity** | 4 KB | 5-10 MB | 5-10 MB |
| **Persistence** | Set via expires/max-age | Cleared on tab close | Persistent until cleared |
| **Sent to server?** | ✅ Yes (automatic with requests) | ❌ No | ❌ No |
| **Accessible from** | Client + Server | Client only (same tab) | Client only |
| **Scope** | Domain + path | Single tab/window | Origin (protocol + domain + port) |
| **Security** | HttpOnly, Secure, SameSite flags | Not accessible by server | Not accessible by server |
| **Use case** | Session ID, tracking | Multi-step form data | Preferences, cached data |

### Cookie Attributes
```
Set-Cookie: sessionId=abc123; Expires=Wed, 21 Oct 2026 07:28:00 GMT; 
            Secure; HttpOnly; SameSite=Lax; Path=/
```
- **Secure:** Only sent over HTTPS
- **HttpOnly:** Not accessible via JavaScript (prevents XSS theft)
- **SameSite:** `Strict` (same-site only), `Lax` (top-level navigation), `None` (cross-site)

---

## 9. RESTful API Principles

| Principle | Description | Example |
|-----------|-------------|---------|
| **Resource-based** | URI represents resources, not actions | `/users/123` not `/getUser?id=123` |
| **HTTP methods** | GET/read, POST/create, PUT/update, DELETE | `POST /users` |
| **Stateless** | Each request has all info (no server session) | Auth token in header |
| **HATEOAS** | Responses include links to related resources | `{"links": {"self": "/users/123"}}` |
| **Idempotent** | Same request → same result | PUT, DELETE |
| **Representation** | Client receives resource representation | JSON, XML |

### REST API Design Example
```
GET    /users              → List all users
POST   /users              → Create new user
GET    /users/{id}         → Get specific user
PUT    /users/{id}         → Full update user
PATCH  /users/{id}         → Partial update user
DELETE /users/{id}         → Delete user
GET    /users/{id}/orders  → Get user's orders
```

### REST vs SOAP
| Aspect | REST | SOAP |
|--------|------|------|
| Protocol | HTTP | HTTP, SMTP, JMS |
| Format | JSON, XML, plain text | XML only |
| State | Stateless | Can be stateful |
| Caching | Leverages HTTP caching | No built-in caching |
| Contract | WADL (optional) | WSDL (required) |
| WS-Security | No built-in | Built-in |

---

## 10. Web Servers Comparison

| Feature | Apache HTTPD | Nginx | IIS |
|---------|-------------|-------|-----|
| Architecture | Process/thread-based | Event-driven (async) | Thread-based |
| Static content | Fair | Excellent (epoll/kqueue) | Good |
| Dynamic content | Modules (mod_php) | Reverse proxy to app | ASP.NET native |
| Configuration | `.htaccess` per directory | Central config file | GUI + XML |
| OS | Unix/Windows | Unix/Windows | Windows only |
| Performance under load | Degrades with many connections | Better for concurrent connections | Good for Windows stack |
| Use case | Traditional hosting | High-concurrency, reverse proxy, load balancer | Enterprise .NET apps |

---

## 11. Browser Rendering Pipeline

```
HTML → DOM (Document Object Model)
   ↓
CSS → CSSOM (CSS Object Model)
   ↓
DOM + CSSOM → Render Tree (visible elements only)
   ↓
Layout (Reflow) — calculate position/size
   ↓
Paint — fill pixels (colors, images, text)
   ↓
Compositing — layers assembled for display
```

### Critical Rendering Path Optimizations
1. **Minimize critical resources:** Inline CSS, defer JS
2. **Reduce render-blocking:** `<script async defer>`, media queries on CSS
3. **Optimize reflows:** Batch DOM writes, avoid layout thrashing
4. **Virtual DOM (React):** Batches DOM updates — diff + patch
5. **CSS containment:** `contain: layout style paint` — isolate rendering

---

## Solved MCQs

**Q1:** What is the specificity of the selector `div#main .content a:hover`?
- (a) 1-2-1
- (b) 1-1-2
- (c) 1-1-3
- (d) 0-2-2

**Answer:** (a) 1-2-1. IDs: #main = 1. Classes/attributes/pseudo-classes: .content, :hover = 2. Elements: div, a = 2? Actually div and a are 2 elements. Wait: div#main .content a:hover → IDs: 1, Classes/pseudo-classes: .content and :hover = 2, Elements: div and a = 2. So (1, 2, 2) = 1-2-2. None of the options match. Let me reconsider: div#main .content a:hover — IDs: #main (1), attributes/classes: .content (1), pseudo-classes: :hover (1), elements: div + a (2). So (1, 2, 2). Closest is (a) 1-2-1 but that doesn't match. I need to be more careful.

Actually I'll simplify the MCQ.

**Q1:** What is the specificity of selector `header #nav .item a`?
- (a) 1-1-1
- (b) 1-2-1
- (c) 1-1-2
- (d) 0-1-2

**Answer:** (c) 1-1-2. IDs: #nav = 1. Classes: .item = 1. Elements: header, a = 2.

**Q2:** Which HTTP method is both safe and idempotent?
- (a) POST
- (b) PUT
- (c) PATCH
- (d) GET

**Answer:** (d) GET. Safe (no server modification) and idempotent (N identical requests = same result).

**Q3:** Which browser event phase occurs first?
- (a) Bubbling
- (b) Target
- (c) Capturing
- (d) Propagation

**Answer:** (c) Capturing. Event starts at the window, travels down to target (capturing), then back up (bubbling).

**Q4:** HTML5 localStorage data persists until:
- (a) Tab is closed
- (b) Browser is closed
- (c) User clears it or code removes it
- (d) Session expires

**Answer:** (c) User clears it or code removes it. localStorage has no expiry and persists across sessions.

**Q5:** A 301 HTTP status code means:
- (a) Temporary redirect
- (b) Not modified
- (c) Moved permanently
- (d) Unauthorized

**Answer:** (c) Moved permanently. 302 = temporary redirect. 304 = not modified.

---

## 12. AJAX &amp; Fetch API

### Traditional AJAX (XMLHttpRequest)
```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/users', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};
xhr.send();
```

### Modern Fetch API
```javascript
fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John' })
})
.then(response => {
    if (!response.ok) throw new Error('HTTP error ' + response.status);
    return response.json();
})
.then(data => console.log(data))
.catch(err => console.error(err));
```

### Async/Await
```javascript
async function getUsers() {
    try {
        const response = await fetch('/api/users');
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Failed:', error);
    }
}
```

### readyState Values
| Value | State | Description |
|-------|-------|-------------|
| 0 | UNSENT | open() not called yet |
| 1 | OPENED | open() called |
| 2 | HEADERS_RECEIVED | send() called, headers available |
| 3 | LOADING | Downloading response body |
| 4 | DONE | Complete |

## 13. CSS Flexbox &amp; Grid

### Flexbox (1D layout — row or column)
```css
.container {
    display: flex;
    justify-content: center;      /* main axis: flex-start, center, space-between */
    align-items: center;          /* cross axis: stretch, center, flex-start */
    flex-wrap: wrap;              /* allow wrapping */
}

.item {
    flex: 1;                      /* grow factor */
    align-self: flex-end;         /* override align-items for specific item */
}
```

### CSS Grid (2D layout — rows and columns)
```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
    grid-template-rows: auto 200px;
    gap: 16px;                               /* spacing */
    grid-template-areas:
        'header header header'
        'main   main   sidebar'
        'footer footer footer';
}
```

### Flexbox vs Grid
| Aspect | Flexbox | Grid |
|--------|---------|------|
| Dimensions | 1D (row OR column) | 2D (rows AND columns) |
| Content/ Layout | Content-driven | Layout-driven |
| Use case | Navigation, centering, card rows | Full page layout, complex grids |
| Alignment | Cross-axis alignment per item | Both axes alignment |

## 14. Responsive Web Design

### Media Queries
```css
/* Mobile-first approach */
body { font-size: 16px; }

@media (min-width: 768px) {   /* Tablet */
    .container { max-width: 720px; }
}

@media (min-width: 1024px) {  /* Desktop */
    .container { max-width: 960px; }
}

@media (prefers-color-scheme: dark) {  /* Dark mode */
    body { background: #111; color: #eee; }
}
```

### Responsive Design Principles
1. **Fluid grids:** Use relative units (%, em, rem, vw, vh) instead of fixed px
2. **Flexible images:** `img { max-width: 100%; height: auto; }`
3. **Media queries:** Adapt layout at breakpoints
4. **Mobile-first:** Design for the smallest screen first, then enhance

### Common Breakpoints
| Device | Width |
|--------|-------|
| Mobile | &lt; 576px |
| Tablet | 576px – 992px |
| Desktop | 992px – 1200px |
| Large Desktop | &gt; 1200px |

## 15. CORS (Cross-Origin Resource Sharing)

### Same-Origin Policy
Browser blocks cross-origin requests (different protocol, domain, or port) by default.

### CORS Headers
```
Access-Control-Allow-Origin: https://example.com    (* for any)
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

### Request Types
| Type | Conditions | Behavior |
|------|-----------|----------|
| **Simple** | GET/HEAD/POST + simple headers | Browser adds Origin header, server responds with ACAO |
| **Preflight** | PUT/DELETE/PATCH, custom headers | Browser sends OPTIONS preflight, then actual request |

## 16. Web Performance Optimization

### Critical Rendering Path Metrics
| Metric | Target | Description |
|--------|--------|-------------|
| **FCP** (First Contentful Paint) | &lt; 1.8s | First text/image painted |
| **LCP** (Largest Contentful Paint) | &lt; 2.5s | Largest element visible |
| **FID** (First Input Delay) | &lt; 100ms | Time to respond to first interaction |
| **CLS** (Cumulative Layout Shift) | &lt; 0.1 | Visual stability score |
| **TTI** (Time to Interactive) | &lt; 3.8s | Fully interactive |

### Optimization Techniques
1. **Minify** CSS/JS/HTML (remove whitespace, comments)
2. **Bundle** with Webpack/Rollup/Vite (tree shaking, code splitting)
3. **Compress** with Gzip/Brotli
4. **Lazy load** images and non-critical resources
5. **Preload** critical resources (`&lt;link rel="preload"&gt;`)
6. **HTTP/2 multiplexing** — multiple requests over one connection
7. **CDN** for static assets (edge caching)
8. **Web Workers** for CPU-intensive tasks off main thread

---

## Summary
- **Architecture:** 2-tier (client→DB), 3-tier (client→app→DB), n-tier (scalable)
- **HTML5:** Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- **CSS:** Selectors (element/class/ID/attribute/pseudo), specificity = (IDs, classes, elements)
- **JavaScript:** DOM traversal/manipulation, events (capturing → target → bubbling)
- **JSON vs XML:** JSON (lighter, native JS) vs XML (verbose, namespaces, schema)
- **HTTP methods:** GET (safe/idempotent), POST (create), PUT (full update, idempotent), PATCH (partial), DELETE (idempotent)
- **Status codes:** 2xx success, 3xx redirect, 4xx client error, 5xx server error
- **Storage:** Cookies (4 KB, sent to server), localStorage (5-10 MB, persistent), sessionStorage (5-10 MB, per tab)
- **REST:** Resource-based URIs, stateless, HTTP methods as actions
- **Browser rendering:** DOM → CSSOM → Render Tree → Layout → Paint → Composite
- **AJAX/Fetch:** XHR (old) → Fetch (modern, promise-based) → Async/await
- **CSS Layout:** Flexbox (1D) vs Grid (2D) for responsive design
- **CORS:** Same-origin policy, preflight for non-simple requests
- **Performance:** FCP, LCP, FID, CLS, TTI — optimize with minification, bundling, CDN

---

## HOT Topics (Frequently Asked in IBPS SO IT Mains)
1. CSS specificity calculation — compare two selectors
2. HTTP methods — safe/idempotent classification, status code scenarios
3. Cookies vs HTML5 storage — capacity, persistence, server visibility
4. Browser rendering — what causes reflow vs repaint
5. RESTful API design — resource naming conventions, best practices
6. HTML5 semantic elements — choose correct element for given content
7. Event propagation — stopPropagation vs preventDefault vs stopImmediatePropagation
8. Cross-Origin Resource Sharing (CORS) — simple vs preflight requests
9. Same-origin policy — what is allowed vs blocked
10. WebSocket vs HTTP/2 Server-Sent Events (SSE) — when to use which

---

## Chapter Quiz (MCQs)

<details>
<summary>Q1: Which HTML element is used for navigation links?</summary>
A1: `<nav>`. It represents a section of a page with navigation links (menus, table of contents, indexes).
</details>

<details>
<summary>Q2: What is the difference between reflow and repaint?</summary>
A2: Reflow (layout) recalculates element positions/sizes when the DOM changes. Repaint redraws pixels after a visual change without layout changes (e.g., color change). Reflow always triggers repaint; repaint doesn't always trigger reflow.
</details>

<details>
<summary>Q3: Which cookie attribute prevents access from JavaScript?</summary>
A3: HttpOnly. Cookies with HttpOnly flag cannot be accessed via `document.cookie`, protecting against XSS-based cookie theft.
</details>

<details>
<summary>Q4: In REST, what is the difference between PUT and PATCH?</summary>
A4: PUT replaces the entire resource with a new representation (idempotent). PATCH applies partial modifications to the resource (may not be idempotent).
</details>

<details>
<summary>Q5: What is the purpose of event delegation?</summary>
A5: Instead of adding event listeners to many child elements, a single listener is attached to a parent. Events bubble up from children to parent, where they are handled based on `e.target`. This improves memory usage and works for dynamically added elements.
</details>
