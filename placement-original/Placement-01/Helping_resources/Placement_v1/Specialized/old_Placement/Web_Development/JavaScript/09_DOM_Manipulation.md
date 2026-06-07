# 9. DOM Manipulation in JavaScript

## What is the DOM?
- DOM (Document Object Model) is a tree-like structure representing the HTML elements of a web page.
- JavaScript can access, modify, add, or remove elements and attributes in the DOM.

## Accessing DOM Elements
- `getElementById('id')`: Selects an element by its ID.
- `getElementsByClassName('class')`: Returns a live HTMLCollection of elements with the given class.
- `getElementsByTagName('tag')`: Returns a live HTMLCollection of elements with the given tag name.
- `querySelector('selector')`: Returns the first element matching a CSS selector.
- `querySelectorAll('selector')`: Returns a static NodeList of all elements matching a CSS selector.

```js
const title = document.getElementById('main-title');
const items = document.querySelectorAll('.item');
```

## Modifying Elements
- Change text: `element.textContent = 'New text';`
- Change HTML: `element.innerHTML = '<b>Bold</b>';`
- Change attributes: `element.setAttribute('src', 'image.png');`
- Change styles: `element.style.color = 'red';`

## Creating and Removing Elements
- Create: `document.createElement('div')`
- Append: `parent.appendChild(child)`
- Remove: `parent.removeChild(child)`
- Example:
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
document.body.appendChild(newDiv);
document.body.removeChild(newDiv);
```

## Traversing the DOM
- `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling`, `previousSibling`
- `children`, `firstElementChild`, `lastElementChild`, `nextElementSibling`, `previousElementSibling`

## Event Handling (Intro)
- Attach event listeners to DOM elements to respond to user actions.
- `element.addEventListener('click', handlerFunction)`

## Best Practices for DOM Manipulation
- Minimize direct DOM manipulation for performance.
- Use `documentFragment` for batch updates.
- Cache DOM queries if used repeatedly.
- Clean up event listeners to avoid memory leaks.

## Best Learning Methods for DOM Manipulation
- **Hands-On Practice:** Build small web pages and manipulate elements dynamically.
- **Mini-Projects:** Create interactive features (e.g., to-do list, modal, tabs).
- **Visualization:** Draw the DOM tree and trace changes as you manipulate it.
- **Debugging:** Use browser dev tools to inspect and modify the DOM live.
- **Teach Back:** Explain DOM concepts and code to someone else.

---

Type "next" to get detailed notes for the next topic: Events in JavaScript.
