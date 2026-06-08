# Events in JavaScript

## What are Events?
- Events are actions or occurrences that happen in the browser (e.g., user clicks, key presses, page loads).
- JavaScript can listen for and respond to these events, making web pages interactive.

## Common Event Types
- Mouse events: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`
- Keyboard events: `keydown`, `keyup`, `keypress`
- Form events: `submit`, `change`, `focus`, `blur`
- Window events: `load`, `resize`, `scroll`, `unload`

## Adding Event Listeners
- Use `addEventListener` to attach an event handler to an element.
```js
document.getElementById('btn').addEventListener('click', function() {
  alert('Button clicked!');
});
```
- Syntax: `element.addEventListener('event', handlerFunction)`
- You can add multiple listeners for the same event.

## Removing Event Listeners
- Use `removeEventListener` to detach an event handler.
```js
function handleClick() {
  console.log('Clicked!');
}
const btn = document.getElementById('btn');
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);
```

## Event Object
- When an event occurs, an event object is passed to the handler.
- Contains information about the event (type, target, etc.).
```js
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});
```

## Event Propagation
- **Bubbling:** Event moves from the target element up to the root.
- **Capturing:** Event moves from the root down to the target.
- You can control propagation with `event.stopPropagation()`.

## Preventing Default Behavior
- Use `event.preventDefault()` to stop default actions (e.g., form submission, link navigation).
```js
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Custom form handling
});
```

## Delegated Events
- Attach a single event listener to a parent element to handle events for multiple child elements (useful for dynamic content).
```js
document.getElementById('list').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    alert('List item clicked: ' + event.target.textContent);
  }
});
```