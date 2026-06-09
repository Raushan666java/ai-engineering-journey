# Chapter 4 — JavaScript and the DOM

## Learning Objectives

By the end of this chapter, you will be able to:

1. Select DOM nodes using modern selector methods (`querySelector`, `querySelectorAll`, `closest`).
2. Traverse the DOM tree among parent, child, and sibling nodes.
3. Create, insert, remove, and clone DOM elements.
4. Manipulate element content, attributes, classes, and inline styles.
5. Handle events using `addEventListener`, understand event phases (capture, target, bubble), implement event delegation, and create custom events.
6. Use `FormData`, `IntersectionObserver`, and `ResizeObserver` for modern DOM interactions.

## Theory

### 4.1 Selecting Elements

Modern DOM selection uses CSS-selector-based methods:

```javascript
const root = document.querySelector('#root');           // First matching element
const items = document.querySelectorAll('.item');        // Static NodeList
const form = document.querySelector('form[data-type]');
const parent = element.closest('.container');            // Nearest ancestor matching selector
```

Legacy methods (still widely supported):

```javascript
document.getElementById('app');
document.getElementsByClassName('item');
document.getElementsByTagName('div');
```

`querySelectorAll` returns a **static NodeList**. For a **live** collection, use:

```javascript
const liveItems = document.getElementsByClassName('item');
```

### 4.2 Traversal

```javascript
const el = document.querySelector('.target');

// Children
el.children;                    // HTMLCollection (elements only)
el.childNodes;                  // NodeList (including text/comment nodes)
el.firstElementChild;           // First child element
el.lastElementChild;            // Last child element

// Parent
el.parentElement;               // Parent element node
el.closest('.container');       // Nearest ancestor matching selector

// Siblings
el.previousElementSibling;
el.nextElementSibling;

// Check
el.contains(otherEl);           // Is otherEl a descendant?
el.matches('.active');          // Does el match selector?
```

### 4.3 Manipulation

**Creating and inserting elements:**

```javascript
const div = document.createElement('div');
div.textContent = 'Hello, World!';
div.className = 'greeting';
div.dataset.index = '1';

// Insertion methods
parent.appendChild(div);                    // Appends at end
parent.prepend(div);                        // Inserts at beginning
parent.insertBefore(div, referenceChild);   // Before reference child
reference.after(div);                       // Inserts after reference
reference.before(div);                      // Inserts before reference

// HTML injection (use with caution — XSS risk)
element.innerHTML = '<strong>Bold text</strong>';

// Safer alternative
element.insertAdjacentHTML('beforeend', '<strong>Bold text</strong>');
// Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
```

**Removing elements:**

```javascript
element.remove();          // Removes from DOM (modern)
parent.removeChild(child); // Traditional method
```

**Attributes and properties:**

```javascript
const input = document.querySelector('input');

// Standard attributes
input.id = 'email-field';
input.type = 'email';
input.value = 'alice@example.com';

// Data attributes
input.dataset.validation = 'required';          // data-validation="required"
console.log(input.dataset.validation);           // 'required'

// ARIA attributes
input.setAttribute('aria-label', 'Email address');
input.getAttribute('aria-label');                // 'Email address'
input.removeAttribute('disabled');

// Class manipulation
div.classList.add('active', 'highlighted');
div.classList.remove('hidden');
div.classList.toggle('expanded');
div.classList.replace('old', 'new');
div.classList.contains('active');               // true/false
```

**Style manipulation:**

```javascript
element.style.color = '#3b82f6';
element.style.backgroundColor = '#f0f0f0';
element.style.setProperty('--custom-var', 'value');
const existing = element.style.getPropertyValue('--custom-var');

// For computed styles
const computed = getComputedStyle(element);
console.log(computed.fontSize);
```

### 4.4 Events

**addEventListener:**

```javascript
element.addEventListener('click', handler, options);

function handler(event) {
  console.log(event.type);       // 'click'
  console.log(event.target);     // Element that triggered the event
  console.log(event.currentTarget); // Element the listener is attached to
  event.preventDefault();        // Cancel default behavior
  event.stopPropagation();       // Stop further propagation
  // event.stopImmediatePropagation(); // Also prevents other listeners on same element
}

// Options object
element.addEventListener('click', handler, {
  capture: false,    // Run during capture phase?
  once: true,        // Auto-remove after first invocation
  passive: true,     // Indicates preventDefault will not be called (scroll optimization)
});
```

**Event phases:**

When a DOM event fires, it travels in three phases:

1. **Capture phase** — Event travels from `document` down to the target element.
2. **Target phase** — Event reaches the target element.
3. **Bubble phase** — Event travels from target back up to `document`.

```javascript
document.addEventListener('click', () => console.log('capture: document'), true);
parent.addEventListener('click', () => console.log('capture: parent'), true);
child.addEventListener('click', () => console.log('bubble: child'), false); // default
parent.addEventListener('click', () => console.log('bubble: parent'), false);
document.addEventListener('click', () => console.log('bubble: document'), false);

// Click on child outputs:
// capture: document
// capture: parent
// bubble: child
// bubble: parent
// bubble: document
```

**Event delegation** exploits bubbling: attach a single listener to a parent to handle events from many children.

```javascript
document.querySelector('table').addEventListener('click', (event) => {
  const row = event.target.closest('tr');
  if (!row) return;

  const action = row.dataset.action;
  switch (action) {
    case 'edit':
      editRecord(row.dataset.id);
      break;
    case 'delete':
      deleteRecord(row.dataset.id);
      break;
  }
});
```

**Custom events:**

```javascript
// Create
const event = new CustomEvent('userLogin', {
  detail: { userId: 123, username: 'alice' },
  bubbles: true,
  cancelable: true,
});

// Dispatch
document.dispatchEvent(event);

// Listen
document.addEventListener('userLogin', (e) => {
  console.log(`User logged in: ${e.detail.username}`);
});
```

### 4.5 FormData

The `FormData` API captures form data programmatically:

```javascript
const form = document.querySelector('#registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);

  // Iterate entries
  for (const [name, value] of data) {
    console.log(name, value);
  }

  // Get single value
  const email = data.get('email');

  // Get all values for a key (checkboxes, multi-select)
  const roles = data.getAll('role');

  // Check if key exists
  const hasAvatar = data.has('avatar');

  // Append additional data
  data.append('submitted_at', new Date().toISOString());

  // Send as multipart/form-data
  fetch('/api/users', {
    method: 'POST',
    body: data, // Content-Type automatically set
  });
});
```

### 4.6 IntersectionObserver

`IntersectionObserver` asynchronously observes visibility changes of elements relative to a parent or the viewport — essential for lazy loading, infinite scroll, and animation triggers.

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;   // Lazy load
        img.classList.add('loaded');
        observer.unobserve(img);     // Stop observing
      }
    }
  },
  {
    root: null,              // Viewport (default)
    rootMargin: '200px',     // Trigger 200px before element enters viewport
    threshold: 0.1,          // Trigger when 10% visible
  }
);

document.querySelectorAll('img[data-src]').forEach((img) => observer.observe(img));
```

### 4.7 ResizeObserver

`ResizeObserver` reports changes to element dimensions — useful for responsive components.

```javascript
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const { width, height } = entry.contentBoxSize[0];
    console.log(`Element is now ${width}px × ${height}px`);

    // Adjust layout or behavior based on size
    entry.target.classList.toggle('compact', width < 400);
  }
});

resizeObserver.observe(document.querySelector('.responsive-panel'));
```

## Summary

- Use `querySelector` and `querySelectorAll` for CSS-selector-based element selection.
- DOM manipulation involves creating elements, inserting them, modifying attributes/classes/styles, and removing them.
- Events propagate in capture-target-bubble phases; delegation leverages bubbling for efficient listener management.
- `FormData` provides a convenient interface for capturing and submitting form data, including file uploads.
- `IntersectionObserver` enables performant visibility-based features like lazy loading and infinite scroll.
- `ResizeObserver` allows responsive components to react to dimension changes at the element level.

## Exercises

### Review Questions

1. How does `querySelectorAll` differ from `getElementsByClassName` in terms of return value liveness?
2. What is the purpose of the `passive` option in `addEventListener`?
3. Why is `innerHTML` dangerous for inserting user-generated content?
4. What is the difference between `event.target` and `event.currentTarget`?

### Application Problems

5. Implement a tab panel component using event delegation. A single click listener on the tablist should handle switching between panels based on the `aria-controls` attribute.
6. Build an image gallery that uses `IntersectionObserver` to lazy-load images as the user scrolls, with a 100px rootMargin.
7. Create a form with `FormData` that collects a user's name, email, profile picture (file), and selected interests (checkboxes). Log the complete `FormData` on submit.

### Challenge Problem

8. Implement a fully accessible custom dropdown select (replacing `<select>`) using ARIA roles (`listbox`, `option`), keyboard navigation (arrow keys, Enter, Escape), and `ResizeObserver` to ensure the dropdown panel stays within the viewport. The component must:
   - Expand and collapse on click and Enter/Space
   - Navigate options with arrow keys (circular wrapping)
   - Set `aria-selected` on the active option
   - Announce selection changes to screen readers using `aria-live`
   - Close on Escape and click outside
   - Recalculate dropdown direction (above or below) when viewport changes using `ResizeObserver`
